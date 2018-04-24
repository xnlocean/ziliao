const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //entry为入口，webpack从这里开始编译
    entry: [
        'babel-polyfill',
        path.resolve(__dirname,'../src/index.js')
    ], 
    //output为输出 path代表路径 filename代表文件名称
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename:'js/bundle.[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/index.[hash:8].css'
        }),
    ],
    module:{
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192 //8k一下的转义为base64
                    }
                }]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'
                }
            }
        }
    }
}