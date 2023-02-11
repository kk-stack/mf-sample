const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require("./package.json");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),

    new ModuleFederationPlugin({
      name: "MFBiDi",
      filename: "remoteEntry.js",
      exposes: {
        './App': './src/App',
      },
      remotes: {
        MFComponents: 'MFComponents@http://localhost:9002/remoteEntry.js',
      },
      shared: {
        ...dependencies
      }
    })
  ],
  devServer: {
    port: 9001,
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