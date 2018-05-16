module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb',
  plugins: [
    'react'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js'
      }
    }
  },
  rules: {
    'comma-dangle': [
      'warn',
      'never'
    ],
    indent: [
      'warn',
      2
    ],
    'linebreak-style': [
      'warn',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': 'off',
    'no-unused-expressions': 'warn',
    'no-useless-concat': 'warn',
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': [
        'src/test/*.js',
        'storybook/**/*.js',
        'src/**/*stories.js',
      ],
      'peerDependencies': false,
      'optionalDependencies': false,
    }],
  }
};
