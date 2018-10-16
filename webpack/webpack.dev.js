const merge = require('webpack-merge');
const path = require('path');
const base = require('./webpack.base');

module.exports = merge(base, {
  devServer: {
    hot: true,
    open: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
  }
});
