<template lang="html">
  <label
    :class="[
      `${prefixCls}-wrapper`,
      { [`${prefixCls}-wrapper-disabled`]: disabled, [`${prefixCls}-wrapper-checked`]: checked }
    ]">
    <span
      :class="[
        `${prefixCls}`,
        `${prefixCls}-focused`,
        { [`${prefixCls}-checked`]: checked, [`${prefixCls}-disabled`]: disabled }
      ]"
      @click="toggle">
      <span :class="`${prefixCls}-inner`"></span>
      <input type="radio" :class="`${prefixCls}-input`" value="on" name="">
    </span>
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'radio',

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
      disabled: {
        type: Boolean,
        default: false
      },
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
