'use strict';
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
    module.exports={
      transporter: transporter
    }
    // setup email data with unicode symbols
