<template lang="html">
  <span :class="classes"
    @click="toggle">
    <span class="ant-switch-inner">
      <slot name="checkedChildren" v-if="checked">{{checkedChildren}}</slot>
      <slot name="unCheckedChildren" v-else>{{unCheckedChildren}}</slot>
    </span>
  </span>
</template>

<script>
  import { curryingContains } from '../../_utils';

  export default {
    name: 'ant-switch',
    props: {
      checkedChildren: String,
      unCheckedChildren: String,
      checked: {
        type: Boolean,
        default: false
      },
      defaultChecked: {
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
    },
    compiled () {
      if (this.checked) return
      if (this.defaultChecked) this.checked = this.defaultChecked
    },
    computed: {
      classes () {
        const { checked, disabled, size } = this

        return {
          'ant-switch': true,
          'ant-switch-checked': checked,
          'ant-switch-disabled': disabled,
          'ant-switch-small': size === 'small'
        }
      }
    }
  };
</script>
