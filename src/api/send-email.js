const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  // İstekin gövdesinden verileri alın
  const { name, email, phone, select, switch1, switch2, switch3, switch4, message } = req.body;

  try {
    // E-posta gönderme işlemleri burada gerçekleştirilecek
    // ...

    // Başarılı yanıt döndürün
    res.status(200).json({ success: true, message: 'E-posta gönderildi' });
  } catch (error) {
    // Hata durumunda hata yanıtı döndürün
    console.error('E-posta gönderilemedi:', error);
    res.status(500).json({ success: false, message: 'E-posta gönderilemedi' });
  }
});

module.exports = router;
