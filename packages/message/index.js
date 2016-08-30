import Message from './message';

const DEFAULT_DURATION = 1.5;

let configTop;
let configDuration = DEFAULT_DURATION;
let messageInstance;

function getMessageInstance() {
  if (messageInstance) return messageInstance;
  messageInstance = Message.newInstance({
    top: configTop
  });

  return messageInstance;
}

function notice(content, duration = configDuration, type) {
  let instance = getMessageInstance();

  instance.notice({
    duration: duration,
    content: content,
    type: type,
    show: true
  });
  return () => {
    const target = instance.component.key;
    instance.removeOnce(target);
  };
}

Message.info = (content, duration) => {
  return notice(content, duration, 'info');
};
Message.success = (content, duration) => {
  return notice(content, duration, 'success');
};
Message.error = (content, duration) => {
  return notice(content, duration, 'error');
};
Message.warning = (content, duration) => {
  return notice(content, duration, 'warning');
};
Message.loading = (content, duration) => {
  return notice(content, duration, 'loading');
};
Message.destory = () => {
  getMessageInstance().destory();
  messageInstance = null;
};
Message.config = (options) => {
  configTop = options.top || configTop;
  configDuration = options.duration || configDuration;
};

module.exports = Message;
