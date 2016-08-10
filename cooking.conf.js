var path = require('path');
var cooking = require('cooking');
var Components = require('./components.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

cooking.set({
  use: 'vue',
  entry: Components,
  dist: './lib',
  template: false,

  // production
  clean: true,
  format: 'umd',
  moduleName: ['ANT', '[name]'],
  extractCSS: '[name]/style.css',
  extends: ['vue', 'lint', 'sass']
});

cooking.add('loader.less', {
  test: /\.less$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader')
});

cooking.add('loader.css', {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src'),
  'packages': path.join(__dirname, 'packages'),
  '_utils': path.join(__dirname, 'packages/_utils')
});
cooking.add('output.filename', '[name]/index.js');

var externals = {};
Object.keys(Components).forEach(function(key) {
  externals[`packages/${key}/index.js`] = {
    root: `ANT.index.${key}`,
    commonjs: `ant-ui/lib/${key}`,
    commonjs2: `ant-ui/lib/${key}`,
    amd: `ant-ui/lib/${key}`
  };
  externals[`packages/${key}/style.css`] = {
    root: `ANT.index.${key}/style.css`,
    commonjs: `ant-ui/lib/${key}/style.css`,
    commonjs2: `ant-ui/lib/${key}/style.css`,
    amd: `ant-ui/lib/${key}/style.css`
  };
});

cooking.add('externals', Object.assign({
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}, externals));

cooking.add('preLoader.js.exclude', /node_modules|lib/);
cooking.add('preLoader.vue.exclude', /node_modules|lib/);

module.exports = cooking.resolve();
