const premailer   = require('premailer-api');
const nodemailer  = require('nodemailer');
var emailTemplate = `
<html>
<head>
  <title>My Email</title>
</head>
<body padding: 0 !important;style="background-color: #380606 !important; -webkit-font-smoothing: antialiased !important; -webkit-text-size-adjust: none !important; width: 100% !important; height: 100% !important; line-height: 1.6em !important;" bgcolor="#380606">
  Styles inlined with
    
  <a href="http://premailer.dialect.ca" style="color: #336699;">Premailer</a> via
  <a href="https://github.com/JedWatson/node-premailer" style="color: #E9820C;">node-premailer</a>.
  <img src="https://www.blog.google/images/download/DvujqGIr46dew-phGARpDy8bMSQ=/1095/original/Google_Logo.png" alt="">
  <style type="text/css">
body { background-color: #380606 !important; -webkit-font-smoothing: antialiased !important; -webkit-text-size-adjust: none !important; width: 100% !important; height: 100% !important; line-height: 1.6em !important; }
</style>
</body>
<html>`
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'truongvanminhtuan@gmail.com', // generated ethereal user
            pass: 'wtnfvnwqnlweyhfy'  // generated ethereal password
        }
    });
    var temp
    premailer.prepare({ html: emailTemplate }, function (err, email) {
        if (err) throw err
        temp = email.html
        console.log(email.html)
    });
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <truongvanminhtuan@gmail.com>', // sender address
        to: 'truongvanminhtuan@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
       // html: emailTemplate  // html body
       template:'home'
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
