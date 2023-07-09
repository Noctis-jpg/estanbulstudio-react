const express = require('express');
const app = express();
const sendEmailRouter = require('./api/send-email');

// Diğer ayarlar ve middleware'ler

app.use('/api/send-email', sendEmailRouter);

// Sunucu dinlemesi ve diğer kodlar
