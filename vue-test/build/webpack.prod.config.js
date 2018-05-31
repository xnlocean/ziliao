const path = require('path');
const merge = require('webpack-merge')
const config = require('../config')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.config')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
  }
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const WebpackConfig = merge(baseWebpackConfig, {
    mode:'production',
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename:'js/bundle.[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js'
      },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require(path.resolve(__dirname, './dist','vendor.manifest.json'))
        }),
        // 编译时配置的全局变量
        new webpack.DefinePlugin({
            'process.env': require('../config/prod.env')
          }),
        // webpack编译过程中出错的时候跳过报错阶段，不会阻塞编译，在编译结束后报错
        new webpack.NamedModulesPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html', //打包后的文件名
            template: path.join(__dirname, "../index.html"),
            hash:true, //防止缓存
            minify:{
                removeAttributeQuotes:true//压缩 去掉引号
            }
        }),
        new CleanWebpackPlugin(['dist/js','dist/css']), //清理打包文件插件
        new PrerenderSPAPlugin({
            staticDir:path.join(__dirname,'/dist'),
            routes:['/']
        }),
        new AddAssetHtmlPlugin([{
            filepath: path.resolve(__dirname,'./dist/*.dll.js')
          }])
    ]
})

module.exports = WebpackConfig
