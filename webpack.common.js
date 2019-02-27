const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      // styles css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      //images
      {
        test: /\.(png|jpg|gif)$/,
        use: ["file-loader"]
      },
      //babel
      {
        test: /\.m?js$/,
        use: [{
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
            }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new CleanWebpackPlugin(["dist"])
  ]
};
