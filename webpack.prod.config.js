const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {BASE_RULES} = require("./webpack.config");
const path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  entry: './src/index.tsx',
  mode: 'production',
  module: {
    rules: BASE_RULES,
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'public',
      }],
    }), 
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
  },
};
