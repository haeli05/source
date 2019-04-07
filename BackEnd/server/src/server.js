import 'babel-polyfill';
import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import mongoSanitize from 'express-mongo-sanitize';
import bodyParser from 'body-parser';
import path from 'path';
import axios from 'axios';
import cors from 'cors';
import HTMLSanitizer from 'express-sanitizer';
import {config} from './config';
import repos from './repo/repo.routes';
import user from './user/user.routes';
import search from './search/search.routes';
import issues from './issues/issues.routes';
import ideas from './ideas/ideas.routes';
import storage from './storage/storage.routes';
import job from './util/cron.util'
var proxy = require('redbird')({
  port: 80,
  letsencrypt: {
    path: "certs",
    port: 9999
  },
  ssl: {
    http2: true,
    port: 443
  }
});

const app = new Express();

mongoose.Promise = global.Promise;
// MongoDB Connection
mongoose.connect(config.mongoURL, { useNewUrlParser: true }, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
  console.log("CONNECTING TO MONGOOSE");
});

app.use(cors());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(mongoSanitize({
  replaceWith: '~'
})) //MongoDB sanitizer, gets rid of '$', to prevent NoSQL injections
app.use(HTMLSanitizer()); // Makes it so No HTML can be saved on the server (removes all HTML tags). Prevents XSS
app.use(Express.static(path.resolve(__dirname, '../dist/client')));
app.use('/api',repos);
app.use('/api',issues);
app.use('/api',user);
app.use('/api',ideas);
app.use('/api',storage);
app.use('/api',search);

job.start();

// SSL redbird
proxy.register('api.sourcenetwork.io', '127.0.0.1:8001', {
  ssl: {
    letsencrypt: {
      email: 'source@sourcenetwork.io', // Domain owner/admin email
      production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
    }
  }
});


app.listen(8001, (error) => {
  if (!error) {
    console.log(`Server Started 8001!`); // eslint-disable-line
  }
});
