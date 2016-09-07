<template lang="html">
  <div class="ant-steps" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { curryingContains } from '../../_utils';

export default {
  name: 'ant-steps',
  props: {
    current: {
      type: Number,
      default: 0
    },
    status: {
      type: String,
      validator: curryingContains(['wait', 'process', 'finish', 'error', undefined]),
      default: 'wait'
    },
    size: {
      type: String,
      default: 'default'
    },
    direction: String
  },
  computed: {
    classes() {
      const { size, direction } = this;
      return {
        'ant-steps-small': size === 'small',
        'ant-steps-horizontal': !direction,
        'ant-steps-label-horizontal': !direction,
        'ant-steps-vertical': direction === 'vertical'
      };
    }
  },
  watch: {
    current() {
      this.culcChildrenProps();
    }
  },
  ready() {
    this.culcChildrenProps();
  },
  methods: {
    culcChildrenProps() {
      const { current, direction, status } = this;
      const lastIndex = this.$children.length - 1;
      this.$children.map((children, index) => {
        const tailWidth = (direction === 'vertical' || index === lastIndex) ? null : `${100 / lastIndex}%`;
        children.stepNumber = index + 1;
        children.current = current;
        children.status = status;
        children.isLast = index === lastIndex;
        children.tailWidth = tailWidth;
        children.adjustMarginRight = `-${(this.$children[lastIndex].$el.offsetWidth + 1) / lastIndex}px`;
      });
    }
  }
};
</script>
