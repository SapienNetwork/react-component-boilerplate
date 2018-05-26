const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const resolve = dir => path.join(__dirname, '', dir);

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
      lib: resolve('src/lib'),
      components: resolve('src/components')
    },
    modules: [
      'node_modules',
      resolve('src'),
      resolve('node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
