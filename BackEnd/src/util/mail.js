
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'source@sourcenetwork.io',
            pass: 'r<}q$RaYMLN!Fy5"'
        }
    });

export default transporter;
