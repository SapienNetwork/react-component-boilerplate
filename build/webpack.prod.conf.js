const path = require('path');
const utils = require('./utils');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  entry: './src/index.js',
  output: {
    path: utils.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
})
