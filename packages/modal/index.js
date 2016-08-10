import Vue from 'vue';
import Modal from './src/Modal';
import Confirm from './src/Confirm';
const ConfirmConstructor = Vue.extend(Confirm);

const TYPE = 'confirm';
const WIDTH = 416;
const ICON_TYPE = 'question-circle';
const OK_TEXT = '确定';
const CANCEL_TEXT = '取消';
const OK_CANCEL = true;

const defaults = {
  type: TYPE,
  width: WIDTH,
  iconType: ICON_TYPE,
  okText: OK_TEXT,
  cancelText: CANCEL_TEXT,
  okCancel: OK_CANCEL
};

function confirm(config) {
  const instance = new ConfirmConstructor({
    el: document.createElement('div'),
    data: {...defaults, ...config},
    components: {
      AntModal: Modal
    }
  });
  instance.$appendTo(document.body);
  return instance;
}

Modal.info = (options) => {
  const config = Object.assign({}, {
    type: 'info',
    iconType: 'info-circle',
    okCancel: false
  }, options);
  return confirm(config);
};

Modal.success = (options) => {
  const config = Object.assign({}, {
    type: 'success',
    iconType: 'check-circle',
    okCancel: false
  }, options);
  return confirm(config);
};

Modal.error = (options) => {
  const config = Object.assign({}, {
    type: 'error',
    iconType: 'cross-circle',
    okCancel: false
  }, options);
  return confirm(config);
};

Modal.warning = (options) => {
  const config = Object.assign({}, {
    type: 'warning',
    iconType: 'exclamation-circle',
    okCancel: false
  }, options);
  return confirm(config);
};

Modal.confirm = (options) => {
  const config = Object.assign({}, {
    type: 'confirm',
    okCancel: true
  }, options);
  return confirm(config);
};

module.exports = Modal;
