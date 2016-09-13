var baseWebpackConfig = require('./webpack.base.conf.js')
var merge = require('webpack-merge')
var utils = require('./utils')
var webpack = require('webpack')

delete baseWebpackConfig.entry
delete baseWebpackConfig.output
delete baseWebpackConfig.devtool

module.exports = merge(baseWebpackConfig, {
  entry: {
    'vue-ant-ui': './components/index.js',
  },
  output: {
    filename: './lib/[name].min.js',
    library: 'VueAntUI',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      drop_console: true,
      compress: {
          warnings: false
      }
    })
  ],
  vue: {
    loaders: utils.cssLoaders()
  },
  module: {
    loaders: utils.styleLoaders()
  }
})
