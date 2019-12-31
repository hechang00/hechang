const path = require('path')
const webpack = require('webpack')
//const utils = require('./utils')


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

function assetsPath(_path) {
  const assetsSubDirectory = 'static';
  return path.posix.join(assetsSubDirectory, _path)
}

const dist = resolve('static')
const src = resolve('src')
const build = resolve('build')


// const rules = utils.styleLoaders({
//     extract: true,
//     usePostCSS: true
// })

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    entry: {
        // 定义程序中打包公共文件的入口文件vendor.js
        vendor: [path.resolve(src, 'dll', 'vendor.js')],
    },

    output: {
        path: path.join(dist, 'dll'),
        filename: '[name].dll.js',
        library: '[name]_[hash]',
        libraryTarget: 'this'
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:'vue-loader'
                // use: [
                //     'cache-loader',
                //     'vue-loader'
                // ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                //loader:'happypack/loader?id=happyBabel',
                exclude: /node_modules/
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
                test: /\.scss$/,
                use: [
                  "vue-style-loader",
                  "css-loader", // 将 CSS 转化成 CommonJS 模块
                  "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
                ]
              },
              {
                test: /\.less$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'less-loader'
                ]
              }
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            // 定义程序中打包公共文件的入口文件vendor.js
            context: __dirname,
            // manifest.json文件的输出位置
            path: path.join(dist, 'dll', '[name]-manifest.json'),
            // 定义打包的公共vendor文件对外暴露的函数名
            name: '[name]_[hash]'
        })
    ]
}