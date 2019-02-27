const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: "development",
    devServer: {
        contentBase: './dist',
        hot: true
    },
    optimization: {
        usedExports: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    // devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({title: 'output managment'}),
        new CleanWebpackPlugin(['dist']),
        // new webpack.HotModuleReplacementPlugin()
    ]
}