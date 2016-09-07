<template lang="html">
  <div class="ant-input-number" :class="classes">
    <div class="ant-input-number-handler-wrap">
      <a unselectable="unselectable" class="ant-input-number-handler ant-input-number-handler-up" :class="{ 'ant-input-number-handler-up-disabled': value >= max }" @click="handleUp">
        <span unselectable="unselectable" class="ant-input-number-handler-up-inner"></span>
      </a>
      <a unselectable="unselectable" class="ant-input-number-handler ant-input-number-handler-down" :class="{ 'ant-input-number-handler-down-disabled': value <= min }" @click="handleDown">
        <span unselectable="unselectable" class="ant-input-number-handler-down-inner"></span>
      </a>
    </div>
    <div class="ant-input-number-input-wrap">
      <input class="ant-input-number-input" :disabled="disabled" :min="min" :max="max" :step="step" autocomplete="off" :value="value">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ant-input-number',
    props: {
      min: {
        type: [Number, String],
        coerce (value) {
          if (typeof value === 'number') return value
          return Number(value)
        },
        default: -Infinity
      },
      max: {
        type: [Number, String],
        coerce (value) {
          if (typeof value === 'number') return value
          return Number(value)
        },
        default: Infinity
      },
      value: {
        type: [Number, String],
        coerce (value) {
          if (typeof value === 'number') return value
          return Number(value)
        }
      },
      defaultValue: {
        type: [Number, String],
        coerce (value) {
          if (typeof value === 'number') return value
          return Number(value)
        },
        default: 0
      },
      step: {
        type: [Number, String],
        default: 1
      },
      onChange: Function,
      disabled: Boolean,
      size: String
    },
    watch: {
      value (value) {
        this.onChange && this.onChange(value)
      }
    },
    compiled() {
      if (this.value) return;
      this.value = this.defaultValue;
    },
    computed: {
      classes() {
        return {
          'ant-input-number-disabled': this.disabled,
          'ant-input-number-lg': this.size === 'large',
          'ant-input-number-sm': this.size === 'small'
        };
      }
    },
    methods: {
      getPrecision() {
        const stepString = this.step.toString();
        if (stepString.indexOf('e-') >= 0) {
          return parseInt(stepString.slice(stepString.indexOf('e-') + 1), 10);
        }
        let precision = 0;
        if (stepString.indexOf('.') >= 0) {
          precision = stepString.length - stepString.indexOf('.') - 1;
        }
        return precision;
      },
      handleUp() {
        let { value, max, min, step } = this;
        if (value >= max) return false;
        if (value < min) value = min
        this.value = (Number(value) + Number(step)).toFixed(this.getPrecision());
      },
      handleDown() {
        let { value, max, min, step } = this;
        if (value <= min) return false;
        if (value > max) value = max
        this.value = (Number(value) - Number(step)).toFixed(this.getPrecision());
      }
    }
  };
</script>
