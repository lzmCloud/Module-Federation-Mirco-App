const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("./package.json");
const { resolve } = require("path");

module.exports = {
  mode: "production",
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "[name]-[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://192.168.1.4:3000/remoteEntry.js",
        auth: "auth@http://192.168.1.4:3006/remoteEntry.js",
        dashboard: "dashboard@http://192.168.1.4:3004/remoteEntry.js",
      },
      shared: packageJSON.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
