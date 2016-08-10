<template lang="html">
  <label class="ant-checkbox-wrapper">
    <span class="ant-checkbox"
      :class="[{ 'ant-checkbox-checked': checked, 'ant-checkbox-disabled': disabled }]">
      <span class="ant-checkbox-inner"></span>
      <input type="checkbox" class="ant-checkbox-input" :checked="checked" @change="toggle">
    </span>
    <span v-if="_slotContents && _slotContents.default">
      <slot></slot>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'checkbox',
    props: {
      defaultChecked: Boolean,
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      onChange: Function
    },
    methods: {
      toggle(e) {
        if (this.disabled) return false;
        this.checked = !this.checked;
        this.onChange && this.onChange(e);
      }
    },
    created() {
      const { defaultChecked } = this;
      if (typeof defaultChecked === 'boolean') {
        this.checked = defaultChecked;
      }
    }
  };
</script>
