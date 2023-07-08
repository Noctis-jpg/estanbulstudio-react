const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:'yunusmaden25@gmail.com',
    pass:'gurnepscpknevmkn'
  }

})

let mailOptions = {
  from: 'yunusmaden25@gmail.com',
  to: 'yunusewis@outlook.com',
  subject: 'Nodemailer Test',
  html: '<h1>Test</h1>'
}

transporter.sendMail(mailOptions,(err,data) => {
  if(err) console.log(err)
  else console.log('mail gönderildi')
})