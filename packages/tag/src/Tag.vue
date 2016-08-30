<template lang="html">
  <div data-show="true" class="ant-tag" :class="{[`ant-tag-${color}`]: color}">
    <span class="ant-tag-text">
      <slot></slot>
    </span>
    <i class="anticon anticon-cross" v-if="closable" @click="handleClose"></i>
  </div>
</template>

<script>
export default {
  name: 'ant-tag',
  props: {
    closable: {
      type: Boolean,
      default: false
    },
    onClose: Function,
    afterClose: Function,
    color: String
  },
  methods: {
    handleClose(e) {
      this.$remove();
      this.onClose && this.onClose(e);
    }
  }
};
</script>
