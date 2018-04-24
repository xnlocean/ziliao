const path = require('path')
 
module.exports = {
    dev: {
        host: 'localhost',
        port: 9090,
        autoOpenBrowser: false, //自动启动
        notifyOnErrors: false,
        useEslint: true,
        cssSourceMap: false,
        devtool: 'eval-source-map',
        assetsPublicPath:'/',
    },
    build:{

    }
}