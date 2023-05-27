const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://strapi-app-angd.onrender.com', // API'nizin adresini buraya yazın
      changeOrigin: true,
    })
  );
};