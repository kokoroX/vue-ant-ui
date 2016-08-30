<template lang="html">
  <div class="ant-back-top" v-show="visible">
    <div class="ant-back-top-content" v-if="!_slotContents">
      <i class="ant-back-top-icon anticon anticon-to-top"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { getScroll } from '_utils';
export default {
  name: 'ant-back-top',
  props: {
    visible: Boolean,
    visibilityHeight: {
      type: Number,
      default: 400
    },
    onClick: Function
  },
  ready: function() {
    document.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy: function() {
    document.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = getScroll(window, true);
      this.visible = scrollTop > this.visibilityHeight;
    }
  }
};
</script>
