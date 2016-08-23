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
      if (this.tooltipEl.visible) return;
      const elTrigger = this.tooltipEl.$els.trigger;
      const triggerWidth = elTrigger.offsetWidth;
      const triggerHeight = elTrigger.offsetHeight;
      console.log(this.tooltipEl.$els.trigger.offsetWidth);
      this.tooltipEl.top = e.currentTarget.offsetTop - triggerHeight;
      this.tooltipEl.left = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2 - triggerWidth / 2;
      this.tooltipEl.visible = true;
    },
    hideTooltip(e) {
      if (!this.tooltipEl) return;
      if (!this.tooltipEl.visible) return;
      this.tooltipEl.visible = false;
    }
  }
};
</script>
