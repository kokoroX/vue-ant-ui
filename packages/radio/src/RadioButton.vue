<template lang="html">
  <label class="ant-radio-button-wrapper" :class="{ 'ant-radio-button-wrapper-disabled': disabled, 'ant-radio-button-wrapper-checked': checked }">
    <span class="ant-radio-button"
      :class="{ 'ant-radio-button-checked': checked, 'ant-radio-button-disabled': disabled }"
      @click="toggle">
      <span class="ant-radio-button-inner"></span>
      <input type="radio" class="ant-radio-button-input" value="on" name="">
    </span>
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'radioButton',

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
      value: [String, Number, Boolean]
    },
    methods: {
      toggle() {
        if (this.disabled) return false;
        this.checked = !this.checked;
        this.$dispatch('toggle-selected', this.value);
        this.onChange && this.onChange(this.checked);
      }
    },
    events: {
      'selected'(value) {
        this.checked = value === this.value;
      },
      'disabled'() {
        this.disabled = true;
      }
    }
  };
</script>
