'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/app',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: 'static/',
    hot: true,
    stats: { chunkModules: false }
  }
}
