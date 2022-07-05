const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  publicPath: './',
  devServer: {
    host: 'localhost',
    port: 8888,
    https: false,
    open: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL, //跨域请求的公共地址
        changeOrigin: true, //是否开启跨域，值为 true 就是开启， false 不开启
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: '' //注册全局路径， 但是在你请求的时候前面需要加上
        }
      }
    }
  }
})
