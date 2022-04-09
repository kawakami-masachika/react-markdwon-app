const path = require('path');

module.exports = {
  entry: './src/index.js',
  outPut: {
    path: path.resolve(__dirname, 'dist'),
    fileName: 'index.js',
    publicPath: 'dist/'
  }
}