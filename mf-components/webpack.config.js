const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('./package.json');

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new ModuleFederationPlugin({
      name: "MFComponents",
      filename: "remoteEntry.js",
      exposes: {
        './Button': './src/Button',
        './Card': './src/Card'
      },
      remotes: {},
      shared: {
        ...dependencies,
      }
    })
  ],
  devServer: {
    port: 9002,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};