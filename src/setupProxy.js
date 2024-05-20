require('dotenv').config()
const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: process.env.BACKEND_URI,
    changeOrigin: true
}
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware(proxy)
    );
};