<template lang="html">
  <label :class="labelClass">
    <span :class="radioClass" @click="toggle">
      <span class="ant-radio-button-inner"></span>
      <input type="radio" class="ant-radio-button-input" @change="toggle" :checked="checked" :value="value">
    </span>
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'ant-radio-button',

    props: {
      prefixCls: {
        type: String,
        default: 'ant-radio'
      },
      onChange: Function,
      checked: {
        type: Boolean,
        default: false
      },
      disabled: Boolean,
      value: [String, Number, Boolean],
      defaultChecked: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      labelClass () {
        const { disabled, checked } = this

        return {
          'ant-radio-button-wrapper': true,
          'ant-radio-button-wrapper-disabled': disabled,
          'ant-radio-button-wrapper-checked': checked
        }
      },
      radioClass () {
        const { disabled, checked } = this

        return {
          'ant-radio-button': true,
          'ant-radio-button-checked': checked,
          'ant-radio-button-disabled': disabled
        }
      }
    },
    methods: {
      toggle(e) {
        const checked = e.target.checked
        if (this.disabled) return false;
        this.checked = checked
        this.$dispatch('toggle-selected', e);
        this.onChange && this.onChange(checked);
      }
    },
    compiled () {
      this.checked = this.defaultChecked
    },
    events: {
      'selected'(value, callback) {
        this.checked = value === this.value;
      },
      'disabled'() {
        this.disabled = true;
      }
    }
  };
</script>

<style>
.ant-radio-button-wrapper {
  font-size: 12px;
}
</style>
