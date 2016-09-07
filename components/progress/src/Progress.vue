<template lang="html">
  <div class="ant-progress" :class="classes">
    <div class="ant-progress-inner" style="font-size: 27.12px;" :style="circleStyle" v-if="type === 'circle'">
      <svg class="rc-progress-circle" viewBox="0 0 100 100">
        <path class="rc-progress-circle-trail" d="M 50,50 m 0,-47
       a 47,47 0 1 1 0,94
       a 47,47 0 1 1 0,-94" stroke="#f3f3f3" :stroke-width="strokeWidth" fill-opacity="0"></path>
        <path class="rc-progress-circle-path" d="M 50,50 m 0,-47
       a 47,47 0 1 1 0,94
       a 47,47 0 1 1 0,-94" stroke-linecap="round" :stroke="strokeColor" stroke-width="6" fill-opacity="0" style="stroke-dasharray: 295.31px, 295.31px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;" :style="{strokeDashoffset: (295.31 - percent * 2.9531) + 'px'}"></path>
      </svg>
      <span class="ant-progress-text" v-if="showInfo">
        {{{onFormat()}}}
      </span>
    </div>
    <div v-if="type === 'line'">
      <div class="ant-progress-outer">
        <div class="ant-progress-inner">
          <div class="ant-progress-bg" :style="lineStyle"></div>
        </div>
      </div>
      <span class="ant-progress-text" v-if="showInfo">
        {{{onFormat()}}}
      </span>
    </div>
  </div>
</template>

<script>
import { curryingContains } from '../../_utils';
export default {
  name: 'ant-progress',
  props: {
    type: {
      type: String,
      validator: curryingContains(['line', 'circle', undefined]),
      default: 'line'
    },
    percent: Number,
    format: Function,
    showInfo: {
      type: Boolean,
      default: true
    },
    status: {
      type: String,
      validator: curryingContains(['normal', 'exception', 'active', 'success', undefined]),
      default: 'normal'
    },
    strokeWidth: {
      type: Number,
      default: 10
    },
    width: {
      type: Number,
      default: 132
    }
  },
  computed: {
    classes() {
      const { statusClass, showInfo, type } = this;
      return {
        [`ant-progress-status-${statusClass}`]: statusClass,
        'ant-progress-show-info': showInfo,
        'ant-progress-line': type === 'line',
        'ant-progress-circle': type === 'circle'
      };
    },
    statusClass() {
      return this.percent === 100 ? 'success' : this.status;
    },
    strokeColor() {
      const colorMap = {
        normal: '#2db7f5',
        success: '#87d068',
        exception: '#ff5500'
      };
      return colorMap[this.statusClass];
    },
    lineStyle() {
      const { percent, strokeWidth } = this;
      return {
        width: `${percent}%`,
        height: `${strokeWidth}px`
      };
    },
    circleStyle() {
      const { width } = this;
      return {
        width: `${width}px`,
        height: `${width}px`,
        fontSize: `${width * 0.16 + 6}px`
      };
    }
  },
  methods: {
    onFormat() {
      const { type, format, percent, statusClass } = this;
      if (format) return format(percent);
      if (statusClass === 'success') {
        if (type === 'circle') {
          return '<i class="anticon anticon-check"></i>';
        } else {
          return '<i class="anticon anticon-check-circle"></i>';
        }
      }
      if (statusClass === 'exception') {
        if (type === 'circle') {
          return '<i class="anticon anticon-cross"></i>';
        } else {
          return '<i class="anticon anticon-cross-circle"></i>';
        }
      }
      return percent + '%';
    }
  }
};
</script>

<style>
.ant-progress {
  font-size: 0;
}
.ant-progress-line .ant-progress-text {
  font-size: 12px;
}
</style>
