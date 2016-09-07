<template lang="html">
  <li class="ant-timeline-item">
    <div class="ant-timeline-item-tail"></div>
    <div class="ant-timeline-item-head" :class="{[`ant-timeline-item-head-${color}`]: color, ['ant-timeline-item-head-custom']: _slotContents.dot}">
      <slot name="dot"></slot>
    </div>
    <div class="ant-timeline-item-content">
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ant-timeline-item',
  props: {
    color: {
      type: String,
      default: 'blue'
    }
  }
};
</script>
