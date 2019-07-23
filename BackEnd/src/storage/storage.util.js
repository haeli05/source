// AWS
import AWS from 'aws-sdk';
import {aws_access_key_id, aws_secret_access_key, aws_bucket_name} from '../config';
// Dependencies
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');


export async function upload(request) {
  // configure the keys for accessing AWS
  AWS.config.update({
    accessKeyId: aws_access_key_id,
    secretAccessKey: aws_secret_access_key
  });
  // configure AWS to work with promises
  AWS.config.setPromisesDependency(bluebird);
  // create a new instance of S3
  const s3 = new AWS.S3();

  // abstracts function to upload a file returning a promise
  const uploadFile = (buffer, name, type) => {
    const params = {
      ACL: 'public-read',
      Body: buffer,
      Bucket: process.env.S3_BUCKET,
      ContentType: type.mime,
      Key: `${name}.${type.ext}`
    };
    return s3.upload(params).promise();
  };

  console.log(request)
  console.log()
  console.log(request.body)
  console.log(request.files)

  // parse form and post it
  const form = new multiparty.Form();
  form.parse(request.body, async (error, fields, files) => {
    if (error) throw new Error(error);
    try {
      const path = files.file[0].path;
      const buffer = fs.readFileSync(path);
      const type = fileType(buffer);
      const timestamp = Date.now().toString();
      const fileName = `bucketFolder/${timestamp}-lg`;
      const data = await uploadFile(buffer, fileName, type);
      return response.status(200).send(data);
    } catch (error) {
      return response.status(400).send(error);
    }
  });
}
