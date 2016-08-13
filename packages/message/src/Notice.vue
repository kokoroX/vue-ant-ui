<template lang="html">
  <div class="ant-message-notice" v-if="visible">
    <div class="ant-message-notice-content">
      <div class="ant-message-custom-content" :class="classes">
        <i class="anticon" :class="iconClass"></i>
        <span>{{content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
const MS = 1000;
export default {
  name: 'ant-message-notice',
  props: {
    content: String,
    duration: {
      type: Number,
      default: 1.5
    },
    type: {
      type: String,
      default: 'info'
    },
    visible: {
      type: Boolean,
      default: true
    }
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
    iconClass() {
      const iconMap = {
        info: 'anticon-info-circle',
        success: 'anticon-check-circle',
        warning: 'anticon-exclamation-circle',
        error: 'anticon-exclamation-circle',
        loading: 'anticon-loading'
      };
      return iconMap[this.type];
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
