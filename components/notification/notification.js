import Notification from './src/Notification.vue';
import Vue from 'vue';

Notification.newInstance = ({top = 24}) => {
  const container = new Vue({
    el: document.createElement('div'),
    template: '<notification v-ref:notification :style="{top: `${top}px`, right: \'0px\'}"></notification>',
    data: () => ({
      top: top
    }),
    components: {
      Notification
    }
  });
  container.$appendTo(document.body);
  const notification = container.$refs.notification;

  return {
    notice(noticeProps) {
      notification.add(noticeProps);
    },
    removeOnce(key) {
      notification.remove(key);
    },
    component: notification,
    destory() {
      container.$remove();
    }
  };
};

export default Notification;
