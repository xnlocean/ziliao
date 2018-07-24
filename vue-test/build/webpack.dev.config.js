const path = require('path');
const merge = require('webpack-merge')
const config = require('../config')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.config')
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
  }
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
    // devServer:{//配置此静态文件服务器，可以用来预览打包后的项目
    //     contenBase: path.resolve(__dirname,'../dist'), //开发服务运行时的文件根目录
    //     host: 'localhost', //主机地址
    //     port: 9090, //端口号
    //     compress: true // 开发服务器是否启动gzip等压缩
    // },
    mode:'development',
    devtool: config.dev.devtool,
    devServer: {
        // contenBase: path.resolve(__dirname,'dist'),
        host: HOST || config.dev.host, //主机地址
        port: PORT || config.dev.port, //端口号
        compress: true, // 开发服务器是否启动gzip等压缩
        historyApiFallback:true,
        hot:true,
        inline:true,
        quiet: true,
        progress:true,
        open: config.dev.autoOpenBrowser,
        proxy: config.dev.proxyTable
    },
    plugins: [
        // 编译时配置的全局变量
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
          }),
        // 开启热更新功能
        new webpack.HotModuleReplacementPlugin(),
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
        // new CleanWebpackPlugin(['dist/js','dist/css']) //清理打包文件插件
    ]
})

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
        if (err) {
          reject(err)
        } else {
          // publish the new Port, necessary for e2e tests
          process.env.PORT = port
          // add port to devServer config
          devWebpackConfig.devServer.port = port
    
          // Add FriendlyErrorsPlugin
          devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
              messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
            },
            onErrors: config.dev.notifyOnErrors
            ? utils.createNotifierCallback()
            : undefined
          }))
    
          resolve(devWebpackConfig)
        }
      })
})
