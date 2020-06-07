const HtmlWebPackPlugin = require("html-webpack-plugin");
const {BASE_RULES} = require("./webpack.config");
const path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
    // open: true,
  },
  devtool: 'source-map',
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: BASE_RULES,
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
  },
};
