<template lang="html">
  <ul class="ant-timeline" :class="{'ant-timeline-pending': _slotContents.pending}">
    <slot></slot>
    <li class="ant-timeline-item ant-timeline-item-pending" v-if="_slotContents.pending">
      <div class="ant-timeline-item-tail"></div>
      <div class="ant-timeline-item-head ant-timeline-item-head-blue"></div>
      <div class="ant-timeline-item-content">
        <slot name="pending"></slot>
      </div>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'ant-timeline',
  ready() {
    let lastIndex = this.$children.length - 1;
    // if (this._slotContents.pending) lastIndex -= 1;
    const el = this.$children[lastIndex].$el;
    Vue.util.addClass(el, 'ant-timeline-item-last');
  }
};
</script>
