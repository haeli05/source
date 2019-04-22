"use strict";
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express();
const transporter = require('./mail').transporter;
const feedbackHtml = require('./feedbackEmail').emailHtml;
const subscribeHtml = require('./subscribeEmail').emailHtml;
const cors = require('cors');

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

app.use(cors());
//Certificate
// Certificate
// const privateKey = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/cert.pem', 'utf8');
// const ca = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/chain.pem', 'utf8');

//const httpsServer = https.createServer(credentials, app);
// httpsServer.listen(443, () => {
// 	console.log('HTTPS Server running on port 443');
// });
//
// const credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ca: ca
// };


//const index = require('./src/index.js');

app.use(express.static(path.join(__dirname, '/build')));
app.use(compression());
app.use(bodyParser.json({limit:'20mb'}));
app.use(bodyParser.urlencoded({limit:'20mb',extended:false}));

//New

app.get('/*', function(req, res) {
  if (req.headers.host.match(/^www/) !== null ) {
    res.redirect(301, 'https://' + req.headers.host.replace(/^www\./, '') + req.url);
  } else {
    res.sendFile(path.join(__dirname+'/build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err);

      }
    })
  }
  res.end();
})

  /**
   * renderToString() will take our React app and turn it into a string
   * to be inserted into our Html template function.
   */
//  const body = React.renderToString(<indexSSR />);
//  console.log("ssrattempt");
//   res.send(
//     Html({
//       body
//     })
//   );
// });


app.post("/subscribe", (req, res)=>{
  let email = req.body.email

  // Send notification to subscriber
  let subscriberOptions = {
      from: '"Source Team" <source@sourcenetwork.io>', // sender address
      to: email, // list of receivers
      cc: "source@sourcenetwork.io",
      subject: 'Thank you for subscribing to source!', // Subject line
      text: 'You will be hearing from us as we continue to update source.', // plain text body
      html: subscribeHtml
  };
  transporter.sendMail(subscriberOptions, (error, info) => {
      if (error) {
        return console.log(error);
        res.sendStatus(400)
      }
      console.log('Subscribe message sent: %s', info.messageId);
  });
  res.sendStatus(200);
  res.end();
})


app.post("/feedback", (req, res)=>{
  let email = req.body.email
  let feedback = req.body.feedback
  // Send feedback to source
  let sourceOptions = {
      from: '"Source Team" <source@sourcenetwork.io>',
      to: "source@sourcenetwork.io",
      subject: `User Feedback from ${email}`,
      text: feedback,
  };
  transporter.sendMail(sourceOptions, (error, info) => {
      if (error) {
        return console.log(error);
        res.sendStatus(400)
      }
      console.log('Feedback message sent to source: %s', info.messageId);
  });

  // Send thank you to user
  let userOptions = {
      from: '"Source Team" <source@sourcenetwork.io>',
      to: email,
      subject: `Thank you for your feedback!`,
      text: "Thank you for your Message! We will be in touch shortly.",
      html: feedbackHtml,
  };
  transporter.sendMail(userOptions, (error, info) => {
      if (error) {
          return console.log(error);
          res.sendStatus(400)
      }
      console.log('Thank you message sent to user: %s', info.messageId);
  });
  res.sendStatus(200);
  res.end();
})

// SSL redbird
proxy.register('www.sourcenetwork.io', '127.0.0.1:3000', {
  ssl: {
    letsencrypt: {
      email: 'source@sourcenetwork.io', // Domain owner/admin email
      production: false, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
    }
  }
});
proxy.register('sourcenetwork.io', '127.0.0.1:3000', {
  ssl: {
    letsencrypt: {
      email: 'source@sourcenetwork.io', // Domain owner/admin email
      production: false, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
    }
  }
});

const port = 3000;
//var server = https.createServer(certOptions, app).listen(3000)
app.listen(port);
console.log(`Landing listening on ${port}`);




//New
// function handleRender(req, res) { /* ... */ }
// function renderFullPage(html, preloadedState) { /* ... */ }
