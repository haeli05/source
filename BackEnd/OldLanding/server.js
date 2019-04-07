const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const path = require('path');
const transporter = require('./mail').transporter;
const emailHtml = require('./subscribeEmail').emailHtml;
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/build')));
app.use(compression());
app.use(bodyParser.json({limit:'20mb'}));
app.use(bodyParser.urlencoded({limit:'20mb',extended:false}));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.post("/mail", (req, res)=>{
  console.log(req.body);
  let email = req.body.email

  let mailOptions = {
      from: '"Source Team" <source@source.lol>', // sender address
      to: email, // list of receivers
      cc: "source@source.lol",
      subject: 'Thank you for subscribing to Source', // Subject line
      text: 'Thank you for subscribing to Source', // plain text body
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



// send mail with defined transport object


const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Landing listening on ${port}`);
