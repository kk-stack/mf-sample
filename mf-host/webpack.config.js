const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { dependencies } = require("./package.json");
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new ModuleFederationPlugin({
      name: "MFHost",
      filename: "remoteEntry.js",
      exposes: {
      },
      remotes: {
        MFBiDi: 'MFBiDi@http://localhost:9001/remoteEntry.js',
      },
      shared: {
        ...dependencies
      }
    })
  ],
  devServer: {
    port: 9000,
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