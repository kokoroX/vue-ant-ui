<template lang="html">
  <span class="ant-switch"
    :class="{ 'ant-switch-checked': checked, 'ant-switch-disabled': disabled, 'ant-switch-small': size === 'small' }"
    tabindex="0"
    @click="toggle">
    <span class="ant-switch-inner">
      <slot name="checkedChildren" v-if="checked"></slot>
      <slot name="unCheckedChildren" v-else></slot>
    </span>
  </span>
</template>

<script>
  import { curryingContains } from '../../_utils';

  export default {
    name: 'ant-switch',
    props: {
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      onChange: Function,
      size: {
        type: String,
        default: 'default',
        validator: curryingContains(['default', 'small', undefined])
      }
    },
    methods: {
      toggle() {
        if (this.disabled) return false;
        this.checked = !this.checked;
        this.onChange && this.onChange(this.checked);
      }
    }
  };
</script>
