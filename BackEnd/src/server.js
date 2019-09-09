// Essentials
import "babel-polyfill";
import Express from "express";
import path from "path";
import bodyParser from "body-parser";
// Database
import mongoose from "mongoose";
import mongoSanitize from "express-mongo-sanitize";
// API
import axios from "axios";
import cors from "cors";
import HTMLSanitizer from "express-sanitizer";
import user from "./user/user.routes";
import search from "./search/search.routes";
import ideas from "./ideas/ideas.routes";
import storage from "./storage/storage.routes";
// Config
import { mongoURL } from "./config";
// Cron
import job from "./util/cron.util";
// Email
const transporter = require("./config").transporter;
const feedbackHtml = require("./emailHTMLfiles/feedbackEmail").emailHtml;
const subscribeHtml = require("./emailHTMLfiles/subscribeEmail").emailHtml;

// Redbird proxy registration
var proxy = require('redbird')({
  port: 80,
  letsencrypt: {
    path: 'certs',
    port: 9999
  },
  ssl: {
    http2: true,
    port: 443
  }
})

// App
const app = new Express();

// MongoDB Connection
// mongoose.Promise = global.Promise;
// mongoose.connect(mongoURL, { useNewUrlParser: true }, (error) => {
//   if (error) {
//     console.error('Please make sure Mongodb is installed and running!') // eslint-disable-line no-console
//     throw error
//   }
//   console.log("CONNECTING TO MONGOOSE");
// });

// CORS
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Connection, DNT, Host, If-None-Match, TE, Upgrade-Insecure-Requests, User-Agent"
  );
  next();
});

// API
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: false }));
app.use(
  mongoSanitize({
    replaceWith: "~"
  })
); // MongoDB sanitizer, gets rid of '$', to prevent NoSQL injections
app.use(HTMLSanitizer()); // Makes it so No HTML can be saved on the server (removes all HTML tags). Prevents XSS
app.use(Express.static(path.resolve(__dirname, "../dist/client")));
app.use("/api", user);
app.use("/api", ideas);
app.use("/api", storage);
app.use("/api", search);

// Email
app.post("/subscribe", (req, res) => {
  let email = req.body.email;
  // Send notification to subscriber
  let subscriberOptions = {
    from: '"Source Team" <source@sourcenetwork.io>', // sender address
    to: email, // list of receivers
    cc: "source@sourcenetwork.io",
    subject: "Thank you for subscribing to source!", // Subject line
    text:
      "Thanks for subscribing. You will be hearing from us as we continue to update source.", // plain text body
    html: subscribeHtml
  };
  transporter.sendMail(subscriberOptions, (error, info) => {
    if (error) {
      return console.log(error);
      res.sendStatus(400);
      return res.end();
    }
    console.log("Subscribe message sent: %s", info.messageId);
    res.sendStatus(200);
    return res.end();
  });
});
app.post("/feedback", (req, res) => {
  let email = req.body.email;
  let feedback = req.body.feedback;
  // Send feedback to source
  let sourceOptions = {
    from: '"Source Team" <source@sourcenetwork.io>',
    to: "source@sourcenetwork.io",
    subject: `User Feedback from ${email}`,
    text: feedback
  };
  transporter.sendMail(sourceOptions, (error, info) => {
    if (error) {
      return console.log(error);
      res.sendStatus(400);
      return res.end();
    }
    console.log("Feedback message sent to source: %s", info.messageId);
  });
  // Send thank you to user
  let userOptions = {
    from: '"Source Team" <source@sourcenetwork.io>',
    to: email,
    subject: `Thank you for your feedback!`,
    text: "Thank you for your Message! We will be in touch shortly.",
    html: feedbackHtml
  };
  transporter.sendMail(userOptions, (error, info) => {
    if (error) {
      return console.log(error);
      res.sendStatus(400);
    }
    console.log("Thank you message sent to user: %s", info.messageId);
    res.sendStatus(200);
    return res.end();
  });
});

// Analytics proxy
var analyticsproxy = require("express-http-proxy")
function getIpFromReq (req) { // get the client's IP address
  var bareIP = ':' + ((req.connection.socket && req.connection.socket.remoteAddress)
    || req.headers['x-forwarded-for'] || req.connection.remoteAddress || '')
  return (bareIP.match(/:([^:]+)$/) || [])[1] || '127.0.0.1'
}
app.use('/analytics', analyticsproxy('www.google-analytics.com', {
  proxyReqPathResolver: function (req) {
    return req.url + (req.url.indexOf('?') === -1 ? '?' : '&')
      + 'uip=' + encodeURIComponent(getIpFromReq(req))
  }
}));

// Cron
// job.start();

// SSL redbird
proxy.register('api.sourcenetwork.io', '127.0.0.1:8001', {
  ssl: {
    letsencrypt: {
      email: 'source@sourcenetwork.io', // Domain owner/admin email
      production: false, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
    }
  }
});

// Lift off!
app.listen(8001, error => {
  if (!error) {
    console.log(`Server Started 8001!`); // eslint-disable-line
  }
});
