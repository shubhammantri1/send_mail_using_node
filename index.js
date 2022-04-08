var nodemailer = require('nodemailer');
 
var mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'smantri600@gmail.com',
    pass: '9413269789'
  }
});
 
var mailOptions = {
   from: 'smantri600@gmail.com',
   to: 'smantri600@gmail.com, shubhamantri25@gmail.com',
   subject: 'Sending Email using Node.js',
   html: '<h1>Welcome</h1><p>That was easy!</p>' ,
   attachments: [{
       filename: 'text1.txt',
       content: 'hello world!'
   }]
}
 
mail.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
});
