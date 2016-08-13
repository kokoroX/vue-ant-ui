import Notification from './notification';

const DEFAULT_DURATION = 1.5;

let configTop;
let configDuration = DEFAULT_DURATION;
let notificationInstance;

function getNotificationInstance() {
  if (notificationInstance) return notificationInstance;
  notificationInstance = Notification.newInstance({
    top: configTop
  });

  return notificationInstance;
}

function notice(props) {
  let instance = getNotificationInstance();

  instance.notice(props);
  return () => {
    const target = instance.component.key;
    instance.removeOnce(target);
  };
}

function noticeWithType(props, type) {
  return notice({...props, type: type});
}

Notification.open = (props) => {
  return notice(props);
};
Notification.info = (props) => {
  return noticeWithType(props, 'info');
};
Notification.success = (props) => {
  return noticeWithType(props, 'success');
};
Notification.error = (props) => {
  return noticeWithType(props, 'error');
};
Notification.warning = (props) => {
  return noticeWithType(props, 'warning');
};
Notification.destory = () => {
  getNotificationInstance().destory();
  notificationInstance = null;
};
Notification.config = (options) => {
  configTop = options.top || configTop;
  configDuration = options.duration || configDuration;
};

module.exports = Notification;
