<template lang="html">
  <div>
    <div>
      <div v-el:trigger class="ant-tooltip" :class="classes" style="transform-origin: 47px 51px 0px;" :style="{top: `${top}px`, left: `${left}px`}">
        <div class="ant-tooltip-content">
          <div class="ant-tooltip-arrow"></div>
          <div class="ant-tooltip-inner">
            <span>123421421</span>
          </div>
        </div>
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
      default: false
    },
    top: Number,
    left: Number
  },
  computed: {
    classes() {
      const { placement, visible } = this;
      return {
        [`ant-tooltip-placement-${placement}`]: placement,
        'ant-tooltip-hidden': !visible
      };
    }
  }
};
</script>
