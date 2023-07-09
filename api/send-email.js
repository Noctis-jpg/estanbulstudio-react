const express = require('express');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors());
app.use(express.json());

const sendEmail = async (req, res) => {
  try {
    const { name, email, phone, select, switch1, switch2, switch3, switch4, message } = req.body;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: "587",
      secure: false,
      auth: {
        user: "yunusmaden25@gmail.com",
        pass: "gurnepscpknevmkn",
      },
    });

    let mailOptions = {
      from: "yunusmaden25@gmail.com",
      to: "yunusewis@outlook.com",
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
};

app.post('/api/send-email', sendEmail);

app.listen(4000, () => {
  console.log('Sunucu çalışıyor...');
});
