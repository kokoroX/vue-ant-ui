import Vue from 'vue';
import App from './notification';
import Ant from 'src';

Vue.use(Ant);

new Vue({ // eslint-disable-line
  el: 'body',
  components: { App }
});
