const path = require('path')
const webpack = require('webpack')
//const utils = require('./utils')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

//const HappyPack = require('happypack');
//const os = require('os');
//const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

function assetsPath(_path) {
  const assetsSubDirectory = 'static'
  return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
  //输出
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js', //配置别名 确保webpack可以找到.vue文件
      '@': resolve('src')
    },
    extensions: ['.js', '.vue', '.json']
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.vue$/,
        //loader:'vue-loader'
        use: ['cache-loader', 'vue-loader']
      },
      {
        // 它会应用到普通的 `.css` 文件
        // 以及 `.vue` 文件中的 `<style>` 块
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'sass-loader' // 将 Sass 编译成 CSS，默认使用 Node Sass
        ]
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    // new HardSourceWebpackPlugin({
    //   cacheDirectory: resolve('.cache/hard-source/[confighash]')
    // }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      minify: {
        removeComments: true
      }
    }),
    //新增dll预编译
    new webpack.DllReferencePlugin({
      context: __dirname, // 跟dll.config里面DllPlugin的context一致
      manifest: require(path.join(
        __dirname,
        '..',
        'static',
        'dll',
        'vendor-manifest.json'
      ))
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, '../dist/static'),
        ignore: ['.*']
      }
    ])
    // ,
    // new HappyPack({
    //     //用id来标识 happypack处理那里类文件
    //   id: 'happyBabel',
    //   //如何处理  用法和loader 的配置一样
    //   loaders: [{
    //     loader: 'babel-loader?cacheDirectory=true',
    //   }],
    //   //共享进程池
    //   threadPool: happyThreadPool,
    //   //允许 HappyPack 输出日志
    //   verbose: true,
    // })
  ]
}
