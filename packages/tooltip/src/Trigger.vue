<template lang="html">
  <div v-el:trigger class="ant-tooltip" :class="classes" :style="styles" v-if="visible">
    <div class="ant-tooltip-content">
      <div class="ant-tooltip-arrow"></div>
      <div class="ant-tooltip-inner">
        <span>
          <slot></slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { curryingContains } from '_utils';
export default {
  props: {
    placement: {
      type: String,
      validator: curryingContains(['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom', undefined]),
      default: 'top'
    },
    visible: {
      type: Boolean,
      default: true
    },
    styles: Object
  },
  computed: {
    classes() {
      const { placement } = this;
      return {
        [`ant-tooltip-placement-${placement}`]: placement
      };
    }
  }
};
</script>
