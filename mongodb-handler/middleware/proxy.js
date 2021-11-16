const { createProxyMiddleware } = require('http-proxy-middleware');

require('dotenv/config');
const broker_url = process.env.BROKER_URL;

const proxyMiddleware = createProxyMiddleware({
 target: broker_url,
 changeOrigin: true,
 pathRewrite: {
   '^/proxy/logging': '/logging',
   '^/proxy/selectQuery': '/selectQuery'
 }
})

module.exports = proxyMiddleware;
