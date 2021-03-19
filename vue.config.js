
module.exports = {
    pages: {
        index: {
            entry: 'src/main.js'
        }
    },
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          logLevel: 'debug',
          pathRewrite: { '^/api': '/' },
        },
      },
    },
  }