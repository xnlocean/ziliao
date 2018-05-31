const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssExtract = new ExtractTextPlugin({filename: 'css/index.[hash:8].css'})
const lessExtract = new ExtractTextPlugin('css/less.[hash:8].css');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    //entry为入口，webpack从这里开始编译
    entry: [
        'babel-polyfill',
        path.resolve(__dirname,'../src/main.js')
    ], 
    //output为输出 path代表路径 filename代表文件名称
    output: {
        path: path.resolve(__dirname, './dist'),
        filename:'js/bundle.[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
        vue$: 'vue/dist/vue.js',
        '@': resolve('src')
        }
    },
    plugins: [
        cssExtract,
        new VueLoaderPlugin(),
        lessExtract,
        // new ModuleConcatenationPlugin(),
        new BundleAnalyzerPlugin(),
        new UglifyJsPlugin()
    ],
    module:{
        rules: [
            {
                test: /\.vue$/, 
                loader: 'vue-loader'
            },
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                  formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.less$/,
                use:lessExtract.extract({
                    fallback:'style-loader',
                    use: ['css-loader','less-loader']
                })
            },
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ["env", "stage-0"]
                    }
                }
            },
            {
                test:/\.css$/,
                // loader:['style-loader','css-loader']
                use:cssExtract.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })//不再需要style-loader

            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192, //8k一下的转义为base64
                        outputPath: 'images/'
                    }
                }]
            },
            { 
                test: /.(eot|woff|ttf)$/, 
                loader: 'url-loader' 
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                //提取公共代码
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    }
}