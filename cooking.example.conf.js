var path = require('path');
var cooking = require('cooking');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

cooking.set({
  entry: {
    app: './example/main.js'
  },
  dist: './dist',
  template: './example/index.tpl',

  devServer: {
    port: 8080,
    // hostname: require('my-local-ip')(),
    hostname: 'localhost',
    publicPath: '/',
    log: false
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  chunk: [
    {
      name: 'vendor',
      minChunks: function(module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, 'node_modules')
          ) === 0
        );
      }
    },
    {
      // extract webpack runtime and module manifest to its own file in order to
      // prevent vendor hash from being updated whenever app bundle is updated
      name: 'manifest',
      chunks: ['vendor']
    }
  ],
  publicPath: '/dist/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  extends: ['vue', 'lint', 'sass']
});

cooking.add('loader.less', {
  test: /\.less$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader')
});

// cooking.add('loader.sass', {
//   test: /\.sass$/,
//   loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
// });

cooking.add('loader.css', {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
});

cooking.add('plugin.ExtractText', new ExtractTextPlugin('[name].css'));

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src'),
  'packages': path.join(__dirname, 'packages'),
  '_utils': path.join(__dirname, 'packages/_utils')
});

module.exports = cooking.resolve();
