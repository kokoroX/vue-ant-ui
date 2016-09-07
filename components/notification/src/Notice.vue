<template lang="html">
  <div class="ant-notification-notice ant-notification-notice-closable" v-if="visible">
    <div class="ant-notification-notice-content">
      <div class="ant-notification-notice-content" :class="{'ant-notification-notice-with-icon': type}">
        <ant-icon class="ant-notification-notice-icon" :class="iconClass" :type="iconType" v-if="type"></ant-icon>
        <div class="ant-notification-notice-message">{{message}}</div>
        <div class="ant-notification-notice-description">{{description}}</div>
      </div>
    </div>
    <a tabindex="0" class="ant-notification-notice-close" @click="handleClose">
      <span class="ant-notification-notice-close-x"></span>
    </a>
  </div>
</template>

<script>
const MS = 1000;
export default {
  name: 'ant-notification-notice',
  props: {
    message: String,
    description: String,
    duration: {
      type: Number,
      default: 4.5
    },
    type: String,
    visible: {
      type: Boolean,
      default: true
    },
    onClose: Function
  },
  data: () => ({
    outTimer: null
  }),
  computed: {
    classes() {
      const { type } = this;
      return {
        [`ant-message-${type}`]: type
      };
    },
    iconType() {
      const iconTypeMap = {
        info: 'info-circle-o',
        success: 'check-circle-o',
        warning: 'exclamation-circle-o',
        error: 'cross-circle-o'
      };
      return iconTypeMap[this.type] || 'info-circle';
    },
    iconClass() {
      const prefix = 'ant-notification-notice-icon-';
      const { type } = this;
      return {
        [`${prefix}${type}`]: type
      };
    }
  },
  ready() {
    this.clearTimer();
    if (!this.duration) return;
    this.outTimer = setTimeout(() => {
      this._close();
    }, this.duration * MS);
  },
  methods: {
    clearTimer() {
      clearTimeout(this.outTimer);
      this.outTimer = null;
    },
    handleClose() {
      this._close();
    },
    _close() {
      this.clearTimer();
      if (this.onClose) {
        this.onClose();
      } else {
        this.visible = false;
      }
    }
  },
  beforeDestory() {
    this.clearTimer();
  }
};
</script>
