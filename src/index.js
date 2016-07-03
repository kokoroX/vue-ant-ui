import uppercamelcase from 'uppercamelcase';

const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};

const modules = requireAll(require.context(
  'packages',
  true,
  /^((?!node_modules|_utils|style).)*[^_]index\.js$/));

const components = {};

modules.forEach(item => {
  const name = uppercamelcase(item.name.replace(/ant-/, ''));
  components[name] = item;
});

export default Object.assign({}, {
  install(Vue) {
    Object.keys(modules).forEach(key => {
      const item = modules[key];
      Vue.component(item.name, item);
    });
  }
}, components);
