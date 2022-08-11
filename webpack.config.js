const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  target: ['web', 'es5'],
  output: {
    environment: {
      arrowFunction: false,
      const: false,
      destructuring: false,
      forOf: false
    },
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};