<template lang="html">
  <div class="ant-steps-item" :class="classes" :style="styles">
    <div class="ant-steps-tail" v-if="!isLast"><i></i></div>
    <div class="ant-steps-step">
      <div class="ant-steps-head" v-el:head>
        <div class="ant-steps-head-inner">
          <span class="ant-steps-icon" :class="{[`anticon-${showIcon}`]: showIcon, 'anticon': showIcon}">
            <template v-if="!showIcon">{{stepNumber}}</template>
          </span>
        </div>
      </div>
      <div class="ant-steps-main">
        <div class="ant-steps-title">
          <slot name="title"></slot>
        </div>
        <div class="ant-steps-description">
          <slot name="discription"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { curryingContains } from '../../_utils';

export default {
  name: 'ant-step',
  props: {
    status: {
      type: String,
      validator: curryingContains(['wait', 'process', 'finish', 'error', undefined]),
      default: 'wait'
    },
    icon: String
  },
  data: () => ({
    stepNumber: 1,
    current: 0,
    isLast: false,
    tailWidth: 'auto',
    adjustMarginRight: null
  }),
  computed: {
    classes() {
      const { showStatus, isLast, icon } = this;
      return {
        [`ant-steps-status-${showStatus}`]: showStatus,
        'ant-steps-item-last': isLast,
        'ant-steps-custom': icon
      };
    },
    styles() {
      const { tailWidth, isLast, adjustMarginRight } = this;
      if (isLast) return {};
      return {
        width: tailWidth,
        marginRight: adjustMarginRight
      };
    },
    showStatus() {
      const { status, stepNumber, current } = this;
      const currentStep = current + 1;
      if (stepNumber < currentStep) return 'finish';
      if (stepNumber > currentStep) return 'wait';
      if (status !== 'wait') return status;
      if (stepNumber === currentStep) return 'process';
    },
    showIcon() {
      const { icon, showStatus } = this;
      if (icon) return icon;
      if (showStatus === 'finish') return 'check';
      if (showStatus === 'error') return 'cross';
    }
  }
};
</script>
