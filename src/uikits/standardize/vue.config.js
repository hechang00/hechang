const path = require('path');

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.join(__dirname, '../../'))

      config.module
      .rule('js')
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}
