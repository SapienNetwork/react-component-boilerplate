const path = require('path');

const resolve = dir => path.join(__dirname, '..', dir);

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
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
      }
    ]
  },
  externals: {
    react: 'commonjs react'
  }
};
