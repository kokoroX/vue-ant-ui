<template lang="html">
  <slot></slot>
</template>

<script>
import Vue from 'vue';
import Trigger from './Trigger';
import { curryingContains } from '../../_utils';

const placeMap = {
  top: [0.5, 0],
  topLeft: [0.5, 0],
  topRight: [0.5, 0],
  left: [0, 0.5],
  leftTop: [0, 0.5],
  leftBottom: [0, 0.5],
  bottom: [0.5, 1],
  bottomLeft: [0.5, 1],
  bottomRight: [0.5, 1],
  right: [1, 0.5],
  rightTop: [1, 0.5],
  rightBottom: [1, 0.5]
};

export default {
  name: 'ant-tooltip',
  props: {
    title: String,
    placement: {
      type: String,
      validator: curryingContains(['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom', undefined]),
      default: 'top'
    }
  },
  data: () => ({
    styles: {}
  }),
  compiled() {
    this.$el = this.$el.nextSibling;

    this.$el.addEventListener('mouseover', this.open);
    this.$el.addEventListener('mouseout', this.close);
  },
  methods: {
    /**
     * 获取元素的坐标位置
     * @param el
     * @returns {{top: number, left: number}}
     */
    getOffset(el) {
      let x = 0;
      let y = 0;
      let ele = el.getBoundingClientRect();
      // while (ele) {
      x += parseInt(ele.left, 10);
      y += parseInt(ele.top, 10);
      // ele = ele.offsetParent;
      // }
      return { top: y, left: x };
    },
    getTooltipStyles() {
      const { placement } = this;
      const offset = this.getOffset(this.$el);
      const eleWidth = this.$el.offsetWidth;
      const eleHeight = this.$el.offsetHeight;
      const placeSet = placeMap[placement];
      const left = `${offset.left + (eleWidth * placeSet[0])}px`;
      const top = `${offset.top + (eleHeight * placeSet[1])}px`;
      const transform = `translate(${(placeSet[0] - 1) * 100}%,${(placeSet[1] - 1) * 100}%)`;
      return {
        left,
        top,
        transform
      };
    },
    create() {
      const { title, placement, styles } = this;
      const Temp = Vue.extend({
        template: '<trigger :visible="visible" :styles="styles" :placement="placement">{{{title}}}</trigger>',
        data: () => ({
          title,
          placement,
          styles,
          visible: true
        }),
        components: {
          Trigger
        }
      });
      const instance = new Temp();
      this.trigger = instance;
      instance.$mount().$appendTo('body');
    },
    open() {
      if (!this.trigger) {
        this.create();
      }
      if (!this.trigger.visible) {
        this.trigger.visible = true;
      }
      this.trigger.styles = this.getTooltipStyles();
      this.trigger.placement = this.placement;
    },
    close() {
      this.trigger.visible = false;
      this.trigger = null;
    }
  }
};
</script>
