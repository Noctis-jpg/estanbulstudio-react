const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/", {
      target: "https://strapi-app-angd.onrender.com",
      changeOrigin: true,
    })
  );
};
