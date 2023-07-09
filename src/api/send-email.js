const express = require('express');
const dotenv = require("dotenv");
const nodemailer = require('nodemailer');
const cors = require('cors');
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // React uygulamasının URL'sini buraya ekleyin
}));

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, select, switch1, switch2, switch3, switch4, message } = req.body;

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.SMTP_MAIL,
      to: process.env.TO_EMAIL,
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
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('E-posta gönderildi:', info.response);
    res.status(200).send('E-posta gönderildi.');
  } catch (err) {
    console.error('E-posta gönderilemedi:', err);
    res.status(500).send('E-posta gönderilemedi.');
  }
});

app.listen(3000, () => {
  console.log('Sunucu çalışıyor...');
});
