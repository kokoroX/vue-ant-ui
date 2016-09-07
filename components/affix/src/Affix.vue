<template lang="html">
  <div :style="placeholderStyle">
    <div :class="{'ant-affix': affixStyle}" :style="affixStyle" v-el:fixed>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { getScroll, getOffset } from '_utils';

export default {
  name: 'ant-affix',
  props: {
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: Number,
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  data: () => ({
    scrollEvent: null,
    resizeEvent: null,
    affixStyle: null,
    placeholderStyle: null
  }),
  ready: function() {
    document.addEventListener('scroll', this.handleScroll);
    document.addEventListener('resize', this.handleScroll);
  },
  beforeDestroy: function() {
    document.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('resize', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let { offsetTop, offsetBottom } = this;
      const scrollTop = getScroll(window, true);
      const affixNode = this.$el;
      const fixedNode = this.$els.fixed;
      const elemOffset = getOffset(affixNode);
      const offsetMode = {
        top: typeof this.offsetTop === 'number',
        bottom: typeof this.offsetBottom === 'number'
      };
      if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
        this.affixStyle = {
          position: 'fixed',
          top: offsetTop + 'px',
          left: elemOffset.left + 'px',
          width: affixNode.offsetWidth + 'px'
        };
        this.placeholderStyle = {
          width: affixNode.offsetWidth + 'px',
          height: affixNode.offsetHeight + 'px'
        };
        this.onChange(true);
      } else if (scrollTop < elemOffset.top + fixedNode.offsetHeight + offsetBottom - window.innerHeight && offsetMode.bottom) {
        this.affixStyle = {
          position: 'fixed',
          bottom: offsetBottom + 'px',
          left: elemOffset.left + 'px',
          width: affixNode.offsetWidth + 'px'
        };
        this.placeholderStyle = {
          width: affixNode.offsetWidth + 'px',
          height: affixNode.offsetHeight + 'px'
        };
        this.onChange(true);
      } else {
        this.affixStyle = null;
        this.placeholderStyle = null;
        this.onChange(false);
      }
    }
  }
};
</script>
