"use strict";
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express();
const transporter = require('./mail').transporter;
const emailHtml = require('./feedbackEmail').emailHtml;
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
        res.status(500).send(err)
      }
    })
  }
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


// send thank you mail with defined transport object
app.post("/mail", (req, res)=>{
  console.log(req.body);
  let email = req.body.email

  let mailOptions = {
      from: '"Source Team" <source@source.lol>', // sender address
      to: email, // list of receivers
      cc: "source@source.lol",
      subject: 'Thank you for your feedback', // Subject line
      text: 'We are constantly working hard to improve Source and we value your input.', // plain text body
      html: emailHtml
  };


  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
})

// send mail to Source with user feedback
app.post("/mail2", (req, res)=>{
  console.log(req.body);
  let email = req.body.email
  let feedback = req.body.feedback

  let mailOptions = {
      from: '"Source Team" <source@source.lol>', // sender address
      to: "source@source.lol", // list of receivers
      subject: `User Feedback from ${email}`, // Subject line
      text: feedback, // plain text body
  };


  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
})

// SSL redbird
proxy.register('www.sourcenetwork.io', '127.0.0.1:3000', {
  ssl: {
    letsencrypt: {
      email: 'source@sourcenetwork.io', // Domain owner/admin email
      production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
    }
  }
});
proxy.register('sourcenetwork.io', '127.0.0.1:3000', {
  ssl: {
    letsencrypt: {
      email: 'source@sourcenetwork.io', // Domain owner/admin email
      production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
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
