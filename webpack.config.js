const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const distPath = path.resolve(__dirname, "dist");

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
          from: "{foo.txt,pics/**/*}",
          to: path.resolve(distPath, `assets/${Date.now()}`),
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
