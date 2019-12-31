const base=require('./webpack.config.base')
const merge=require('webpack-merge')
const MiniCssExtractPlugin =require('mini-css-extract-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const path = require('path')

module.exports = merge(base, {
  entry: ['@babel/polyfill', path.join(__dirname, '../src/main.js')],
  output: {
    filename: 'js/[name][hash].js',
    chunkFilename: 'js/vendor[id][hash].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: '/src/components/jimu/',
          name: 'vendorsjimu',
          chunks: 'all'
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
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
      // {
      //     test:/\.css$/,
      //     use:[
      //         {loader:MiniCssExtractPlugin.loader},
      //         'css-loader'
      //     ]
      // }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({filename:'css/[hash].css'}),
    new CleanWebpackPlugin()
  ]
})