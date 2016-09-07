<template lang="html">
  <div data-show="true" class="ant-alert" :class="classes">
    <i :class="iconClass" v-if="showIcon"></i>
    <span class="ant-alert-message">{{message}}</span>
    <span class="ant-alert-description">{{description}}</span>
    <a class="ant-alert-close-icon" v-if="closable || closeText" @click="handleClose">
      <template v-if="closeText">{{closeText}}</template>
      <i class="anticon anticon-cross" v-else></i>
    </a>
  </div>
</template>

<script>
const iconMap = {
  success: 'check',
  info: 'info',
  warning: 'exclamation',
  error: 'cross'
}

export default {
  name: 'ant-alert',
  props: {
    message: [String, Number],
    description: [String, Number],
    type: String,
    closable: Boolean,
    showIcon: Boolean,
    closeText: [String, Number],
    onClose: Function
  },
  computed: {
    classes() {
      const { type, description, showIcon } = this;
      return {
        'ant-alert-with-description': description,
        'ant-alert-no-icon': !showIcon,
        [`ant-alert-${type}`]: type
      };
    },
    iconClass () {
      const { type, description } = this

      return {
        'anticon': true,
        'ant-alert-icon': true,
        [`anticon-${iconMap[type]}-circle`]: !description,
        [`anticon-${iconMap[type]}-circle-o`]: description
      }
    }
  },
  methods: {
    handleClose(e) {
      this.onClose && this.onClose(e);
      this.$remove();
    }
  }
};
</script>
