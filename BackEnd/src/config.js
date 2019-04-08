const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://peterpotamus:nope@3.209.134.42:27017/source',
  //mongoURL: process.env.MONGO_URL || 'mongodb://thanatos666:rainingbl00d@ec2-54-166-154-133.compute-1.amazonaws.com:27017/source', //ec2-34-204-199-169.compute-1.amazonaws.com
  //mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017',
  port: process.env.PORT || 8000,
  secret: '9812-dDHOEKHoif-223',
  gitlabToken: 'xxJk-icz3soA2u3MxKBC',
  pk: '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3',
  gitlabURL: 'http://git.sourcenetwork.io/api/v4'
};

const config_old = {
  mongoURL: process.env.MONGO_URL || 'mongodb://thanatos666:rainingbl00d@ec2-34-204-199-169.compute-1.amazonaws.com:/source',
  //mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017',
  port: process.env.PORT || 8000,
  secret: '9812-dDHOEKHoif-223',
  gitlabToken: 'CC49Ct8_hcneiSyxYYf9',
  pk: '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3',
  gitlabURL: 'http://ec2-34-229-131-135.compute-1.amazonaws.com/api/v4'
};

const configChain = {
  keyProvider: [],
  httpEndpoint: 'http://ec2-34-227-77-165.compute-1.amazonaws.com:8888',//'http://ec2-34-227-77-165.compute-1.amazonaws.com:8888',
  broadcast: true,
  debug: false,
  sign: true,
};

const configFiles = {
  masterSC: 'master',
  distributionSC: 'distribution',
  gateSC: 'gate',
  repoWASM: '../repo.wasm',
  repoWAST: '../repo.wast',
  repoABI: '../repo.abi'
}

const aws_access_key_id = 'AKIAJPLJT32P323GA2RQ';
const aws_secret_access_key = '2E/lg6ew2pffA22Dls3JJlh+GhX8xmkUv9UBMkLB';

const masterKey = '5K24bFiX5XyE3igGcmy2Tyj1PNABc78BabmdN1VMj4wNR2MEbKw'; //change this to your master prv key
const eosioKey = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3';


//NODEMAILER
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: 'source@source.lol',
        pass: 'fetishes669.oblate'
    }
});
// setup email data with unicode symbols



module.exports =  {
  config: config,
  configChain :configChain,
  configFiles: configFiles,
  masterKey: masterKey,
  eosioKey: eosioKey,
  aws_access_key_id: aws_access_key_id,
  aws_secret_access_key: aws_secret_access_key,
  transporter: transporter
 }
