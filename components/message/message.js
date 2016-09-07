import Message from './src/message.vue';
import Vue from 'vue';

Message.newInstance = ({top = 24}) => {
  const container = new Vue({
    el: document.createElement('div'),
    template: '<message v-ref:message :style="{top: `${top}px`}"></message>',
    data: () => ({
      top: top
    }),
    components: {
      Message
    }
  });
  container.$appendTo(document.body);
  const message = container.$refs.message;

  return {
    notice(noticeProps) {
      message.add(noticeProps);
    },
    removeOnce(key) {
      message.remove(key);
    },
    component: message,
    destory() {
      container.$remove();
    }
  };
};

export default Message;
