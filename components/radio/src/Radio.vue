<template lang="html">
  <label :class="labelClass">
    <span :class="radioClass">
      <span :class="`${prefixCls}-inner`"></span>
      <input type="radio" :class="`${prefixCls}-input`" @change="toggle" :checked="checked" :value="value">
    </span>
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'ant-radio',

    props: {
      prefixCls: {
        type: String,
        default: 'ant-radio'
      },
      onChange: Function,
      checked: Boolean,
      disabled: {
        type: Boolean,
        default: false
      },
      value: [String, Number, Boolean],
      defaultChecked: {
        type: Boolean,
        default: false
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
    computed: {
      labelClass () {
        const { prefixCls, disabled, checked } = this

        return [
          `${prefixCls}-wrapper`,
          {
            [`${prefixCls}-wrapper-disabled`]: disabled,
            [`${prefixCls}-wrapper-checked`]: checked
          }
        ]
      },
      radioClass () {
        const { prefixCls, disabled, checked } = this

        return [
          `${prefixCls}`,
          `${prefixCls}-focused`,
          {
            [`${prefixCls}-checked`]: checked,
            [`${prefixCls}-disabled`]: disabled
          }
        ]
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
