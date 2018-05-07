const path = require('path')
 
module.exports = {
    dev: {
        host: 'localhost',
        port: 9070,
        proxyTable:{},
        autoOpenBrowser: false, //自动启动
        notifyOnErrors: false,
        useEslint: true,
        cssSourceMap: false,
        devtool: 'eval-source-map',
        assetsPublicPath:'/',
        showEslintErrorsInOverlay: false,
    },
    build:{
        // 构建环境
        env:require('./prod.env'),
        // 是否开启 cssSourceMap
        productionSourceMap: true,
    }
}