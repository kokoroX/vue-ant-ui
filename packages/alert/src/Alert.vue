<template lang="html">
  <div data-show="true" class="ant-alert" :class="classes">
    <i class="ant-alert-icon anticon anticon-check-circle" v-if="showIcon"></i>
    <span class="ant-alert-message">{{message}}</span>
    <span class="ant-alert-description">{{description}}</span>
    <a class="ant-alert-close-icon" v-if="closable || closeText" @click="handleClose">
      <template v-if="closeText">{{closeText}}</template>
      <i class="anticon anticon-cross" v-else></i>
    </a>
  </div>
</template>

<script>
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
    }
  },
  methods: {
    handleClose() {
      this.onClose && this.onClose();
      this.$remove();
    }
  }
};
</script>
