const express         = require('express')
const exphbs          = require('express-handlebars')
const nodemailer      = require('nodemailer')
const hbsEmail        = require('nodemailer-express-handlebars')
var app = express()
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
var ojTemp={
    name:'title is here',
    content:'<h1> handlebars is here</h1>',
    example:'<button> Hello </button>',
    people: [
        { firstName: 'Homer', lastName: 'Simpson' ,age:12},
        { firstName: 'Peter', lastName: 'Griffin',age:13},
        { firstName: 'Eric', lastName: 'Cartman' ,age:14},
        { firstName: 'Kenny', lastName: 'McCormick' ,age:17},
        { firstName: 'Bart', lastName: 'Simpson' ,age:21}
      ],
    helpers: {
        service: service ,
        credits: credits ,
        total: total
    },
    orderID:'this is order.alias',
    deliveryTime:'this is completedAt',
    address:'this is receiverAdress',
    recipient:'this is receiver + receiverPhone',
    showTitle: false,
    title:'test is here',
    settings:
        {supportEmail:'email is here'}
    
   }
function service(){
    return 'this is function Service'
}
function credits(){
    return 'this is function Credits'
}
function total(){
    return 'this is function Total'
}
var Options = {
    viewEngine: {
        extname: '.handlebars',
        layoutsDir: (__dirname, './views'),
        defaultLayout : 'home',
        partialsDir : '/views'
    },
    viewPath: 'views/',
    extName: '.handlebars',
};
app.get('/', function (req, res) {
//     nodemailer.createTestAccount((err, account) => {
//        // create reusable transporter object using the default SMTP transport
//         let transporter = nodemailer.createTransport({
//             host: 'smtp.gmail.com',
//             port: 587,
//             secure: false, // true for 465, false for other ports
//             auth: {
//                 user: 'truongvanminhtuan@gmail.com', // generated ethereal user
//                 pass: 'wtnfvnwqnlweyhfy'  // generated ethereal password
//             }
//         });
//       transporter.use('compile', hbsEmail(Options));
//         // setup email data with unicode symbols
//         let mailOptions = {
//             from: '"Fred Foo " <truongvanminhtuan@gmail.com>', // sender address
//             to: 'truongvanminhtuan@gmail.com', // list of receivers
//             subject: 'Hello', // Subject line
//             text: 'Hello world?', // plain text body
//             template:'main',  // html body
//             context:ojTemp
//         }
//        // send mail with defined transport object
//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 return console.log(error);
//             }
//             console.log('Message sent: %s', info.messageId);
//             // Preview only available when sending through an Ethereal account
//             console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//             // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
//             // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//         })
//    })
    res.render('main',ojTemp)
});
app.listen(3000)