const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/debug/fastlogin',
  transpileDependencies: true,
  devServer:{
    allowedHosts: 'all'

  }
})
