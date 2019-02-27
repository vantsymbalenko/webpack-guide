const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const WebpackBundleAnalizerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
        // new WebpackBundleAnalizerPlugin()
    ]
})