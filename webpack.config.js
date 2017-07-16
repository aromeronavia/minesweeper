const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    stats: 'errors-only'
  },
  entry: path.join(__dirname, 'buscaminas/buscaminas.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'scripts'),
    filename: 'index.processed.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html',
    title: 'Buscaminas'
  })]
};
