import uppercamelcase from 'uppercamelcase';
import './style';

const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};

const modules = requireAll(require.context(
  '../components',
  true,
  /(^\.\/((?!node_modules|_utils|style).)+\/[^/]*index\.js$)/));

const components = {};

modules.forEach(item => {
  const name = uppercamelcase(item.name.replace(/ant-/, ''));
  components[name] = item;
});

module.exports = Object.assign({}, {
  install(Vue) {
    Object.keys(modules).forEach(key => {
      const item = modules[key];
      Vue.component(item.name, item);
    });
  }
}, components);
