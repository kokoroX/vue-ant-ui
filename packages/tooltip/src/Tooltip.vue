<template lang="html">
  <span @mousemove="showTooltip">
    <slot></slot>
  </span>
</template>

<script>
import Vue from 'vue';
import Trigger from './Trigger';
const TriggerConstructor = Vue.extend(Trigger);

export default {
  name: 'ant-tooltip',
  props: {
    getTooltipContainer: {
      type: Function,
      default: () => document.body
    }
  },
  data: () => ({
    tooltipEl: null
  }),
  methods: {
    createTooltip() {
      const el = this.getTooltipContainer();
      const instance = new TriggerConstructor({
        el: document.createElement('div')
      });
      instance.$appendTo(el);
      this.tooltipEl = instance;
    },
    showTooltip(e) {
      if (!this.tooltipEl) {
        this.createTooltip(e);
      }
      this.tooltipEl.top = e.target.offsetTop;
      this.tooltipEl.left = e.target.offsetLeft;
    }
  }
};
</script>
