const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        vue: ['vue-router', 'vuex', 'vue'] //vue模块打包到一个动态连接库
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
            }
    },
    devtool: '#source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].dll.js', //输出动态连接库的文件名称
        library: '_dll_[name]' //全局变量名称
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new webpack.DllPlugin({
            name: '_dll_[name]', //和output.library中一致，也就是输出的manifest.json中的 name值
            path: path.resolve(__dirname, './dist', '[name].manifest.json')
        })
    ]
}