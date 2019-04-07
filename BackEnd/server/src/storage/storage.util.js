import AWS from 'aws-sdk';
import {aws_access_key_id, aws_secret_access_key} from '../config';
import ecc from 'eosjs-ecc';


const s3 = new AWS.S3({
  accessKeyId: aws_access_key_id,
  region: 'us-east-1',
  secretAccessKey: aws_secret_access_key
});


//generates a random key to use as image index
//then sends a presigned post object to be used in an HTML form
export async function awsToken() {
  const _key = await ecc.unsafeRandomKey().catch(err => {throw err;});
  const data = await awsPost({Bucket: 'source-images-xyz', Fields: {key: _key}}).catch(err => {throw err});
  const obj = parseAWS(data);
  obj.key = _key;
  return obj;
}


//promisified s3.createPresignedPost
function awsPost(q) {
  return new Promise((resolve, reject) => {
    s3.createPresignedPost(q, function(err, data) {
      if (err) {reject(err)}
      else {
        resolve(data)
      }
    });
  })
}






//Parses the response sent by AWS S3 createPresignedPost
function parseAWS(data) {
  const obj = {}
  obj['x-amz-signature']   = data.fields['X-Amz-Signature'];
  obj['x-amz-algorithm']   = data.fields['X-Amz-Algorithm'];
  obj['x-amz-credential']  = data.fields['X-Amz-Credential'];
  obj['x-amz-date']        = data.fields['X-Amz-Date'];
  obj['bucket']            = data.fields['bucket'];
  obj['policy']            = data.fields.Policy;
  obj['url']               = data.url;
  return obj;
}



/*
export async function awsToken() {
  const _key = await ecc.unsafeRandomKey().catch(err => {throw err;});
  const data = await awsPost({Bucket: 'source-images-xyz', Key: _key}).catch(err => {throw err});
  return data;
}


//promisified s3.createPresignedPost
function awsPost(q) {
  return new Promise((resolve, reject) => {
    s3.getSignedUrl('putObject',q, function(err, data) {
      if (err) {reject(err)}
      else {
        resolve(data)
      }
    });
  })
}
*/
