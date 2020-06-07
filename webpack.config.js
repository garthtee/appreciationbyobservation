const BASE_RULES = [
  {
    exclude: /node_modules/,
    test: /\.(js|ts|jsx|tsx)$/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    exclude: /node_modules/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    test: /\.scss$/,
  },
  {
    exclude: /node_modules/,
    test: /\.html$/,
    use: [{
      loader: 'html-loader',
    }],
  },
  {
    exclude: /node_modules/,
    test: /\.(js)$/,
    use: ['eslint-loader'],
  },
  {
    exclude: /node_modules/,
    test: /\.(png)$/, 
    use: [{
      loader: 'file-loader?name=images/[name].[ext]',
    }],
  },
];

module.exports = {BASE_RULES};
