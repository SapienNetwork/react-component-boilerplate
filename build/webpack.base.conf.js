const utils = require('./utils');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': utils.resolve('src'),
      lib: utils.resolve('src/lib'),
      components: utils.resolve('src/components')
    },
    modules: [
      'node_modules',
      utils.resolve('src'),
      utils.resolve('node_modules')
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
  }
}
