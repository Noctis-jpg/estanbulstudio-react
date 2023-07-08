const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.post('/api/send-email', (req, res) => {
  const { name, email, phone, select, switch1, switch2, switch3, switch4, message } = req.body;


  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yunusmaden25@gmail.com',
      pass: 'gurnepscpknevmkn'
    }
  });

  let mailOptions = {
    from: 'yunusmaden25@gmail.com',
    to: 'yunusewis@outlook.com',
    subject: 'Nodemailer Test',
    html: `
      <h1>Test</h1>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Select: ${select}</p>
      <p>Switch1: ${switch1}</p>
      <p>Switch2: ${switch2}</p>
      <p>Switch3: ${switch3}</p>
      <p>Switch4: ${switch4}</p>
      <p>Message: ${message}</p>
    `
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('E-posta gönderilemedi.');
    } else {
      console.log('E-posta gönderildi');
      res.status(200).send('E-posta gönderildi.');
    }
  });
});

app.listen(3000, () => {
  console.log('Sunucu çalışıyor...');
});