const base=require('./webpack.config.base')
const merge=require('webpack-merge')
const webpack=require('webpack')
const portfinder = require('portfinder')
const path = require('path')

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || 8080
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      resolve(
        merge(base, {
          //输入
          entry: ['@babel/polyfill', path.join(__dirname, '../src/main.js')],
          devServer: {
            port: port,
            host: 'localhost',
            open: true,
            hot: true,
            overlay: { erros: true }
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory=true'
                // exclude:/node_modules/
                //loader:'happypack/loader?id=happyBabel',
                // exclude: [resolve('node_modules/vue'), resolve('node_modules/vuex')]
              }
            ]
          },
          plugins: [new webpack.HotModuleReplacementPlugin()]
        })
      )
    }
  })
})