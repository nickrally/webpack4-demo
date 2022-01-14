const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
    ohnoes: "./src/ohnoes.js",
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "Output Management" }),
    new CopyPlugin({
      patterns: [
        {
          from: "**/*",
          to: ".",
          context: path.resolve(__dirname, "assets/visual"),
        },
      ],
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
