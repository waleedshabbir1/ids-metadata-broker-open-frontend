const { createProxyMiddleware } = require('http-proxy-middleware');

require('dotenv/config');
const broker_url = process.env.BROKER_URL;

const proxyadminMiddleware = createProxyMiddleware({
 target: broker_url,
 changeOrigin: true,
 pathRewrite: {
   '^/proxyadmin/updateQuery': '/updateQuery'
 }
})

module.exports = proxyadminMiddleware;
