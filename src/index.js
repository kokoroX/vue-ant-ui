import uppercamelcase from 'uppercamelcase';
import '../packages/style';

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

module.exports = Object.assign({}, {
  install(Vue) {
    Object.keys(modules).forEach(key => {
      const item = modules[key];
      Vue.component(item.name, item);
    });
    /* eslint-disable */
    // let offsetHeight;
    // Vue.transition('ant-motion-collapse', {
    //   enterClass: 'ant-motion-collapse',
    //   leaveClass: 'ant-motion-collapse',
    //   enter(el) {
    //     offsetHeight = el.offsetHeight;
    //     el.style.height = 0;
    //     el.style.overflow = 'hidden';
    //     setTimeout(() => {
    //       el.style.height = `${offsetHeight}px`;
    //     }, 0)
    //   },
    //   leave(el) {
    //     el.style.height = 0;
    //   },
    //   afterLeave(el) {
    //     el.style.height = '';
    //   },
    //   leaveCancelled(el) {
    //     el.style.height = '';
    //   }
    // });
  }
}, components);
