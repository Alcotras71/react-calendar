const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  devtool: "eval-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  devServer: { contentBase: path.join(__dirname, "src") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new WebpackNotifierPlugin({ alwaysNotify: false }),
  ],
};
