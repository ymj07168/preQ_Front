const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "https://www.preq.site",
            changeOrigin: true
        })
    )
}