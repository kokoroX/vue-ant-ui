<template lang="html">
  <span class="ant-badge" :class="classes">
    <slot></slot>
    <sup data-show="true" class="ant-scroll-number ant-badge-dot" :style="styles" v-if="dot"></sup>
    <sup data-show="true" class="ant-scroll-number ant-badge-count" :style="styles" v-if="count">
      <span class="ant-scroll-number-only">
        <p class="current">{{count | overflow}}</p>
      </span>
    </sup>
  </span>
</template>

<script>
export default {
  name: 'ant-badge',
  props: {
    count: Number,
    overflowCount: {
      type: Number,
      default: 99
    },
    dot: Boolean,
    countStyle: Object
  },
  computed: {
    classes() {
      const { _slotContents } = this;
      return {
        'ant-badge-not-a-wrapper': !_slotContents
      };
    },
    styles() {
      const { _slotContents, countStyle } = this;
      let stylesObj = {};
      if (_slotContents) {
        stylesObj = {
          right: 0,
          transform: 'translateX(50%)'
        };
      }
      Object.assign(stylesObj, countStyle);
      return stylesObj;
    }
  },
  filters: {
    overflow(value) {
      const { overflowCount } = this;
      return value > overflowCount ? `${overflowCount}+` : value;
    }
  }
};
</script>
