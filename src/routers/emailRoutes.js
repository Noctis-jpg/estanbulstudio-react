const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');



router.post('/send-email', async (req, res) => {
  const { name, email, phone, select, switch1, switch2, switch3, switch4, message } = req.body;

  try {
    // E-posta göndermek için bir taşıyıcı oluşturun
    let transporter = nodemailer.createTransport({
      service: 'Gmail', // E-posta sağlayıcınıza göre değiştirin
      auth: {
        user: 'your-email@gmail.com', // E-posta adresinizi ve şifrenizi girin
        pass: 'your-password',
      },
    });

    // E-posta içeriğini oluşturun
    let mailOptions = {
      from: 'your-email@gmail.com', // Gönderenin e-posta adresi
      to: 'recipient@example.com', // Alıcının e-posta adresi
      subject: 'Contact Form Message', // E-posta konusu
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Estimated Rental Hour:</strong> ${select}</p>
        <p><strong>Photographer/Producer Support:</strong> ${switch1 ? 'Open' : 'Closed'}</p>
        <p><strong>Video Camera and Equipment:</strong> ${switch2 ? 'Open' : 'Closed'}</p>
        <p><strong>Photography Camera and Equipment:</strong> ${switch3 ? 'Open' : 'Closed'}</p>
        <p><strong>All Equipment:</strong> ${switch4 ? 'Open' : 'Closed'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // E-posta gönderme işlemini gerçekleştirin
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'E-posta gönderildi' });
  } catch (error) {
    console.error('E-posta gönderilemedi:', error);
    res.status(500).json({ success: false, message: 'E-posta gönderilemedi' });
  }
});

module.exports = router;
