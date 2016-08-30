<template>
  <ul class="ant-menu ant-menu-root" :class="classes" role="menu">
    <slot></slot>
  </ul>
</template>

<script>
  import { curryingContains } from '../../_utils';

  export default {
    name: 'ant-menu',
    props: {
      theme: {
        type: String,
        default: 'light',
        validator: curryingContains(['light', 'dark'])
      },
      mode: {
        type: String,
        default: 'vertical',
        validator: curryingContains(['vertical', 'horizontal', 'inline'])
      },
      selectedKeys: Array,
      openKeys: Array,
      onOpen: Function,
      onClose: Function,
      onSelece: Function,
      onDeselect: Function,
      onClick: Function
    },
    computed: {
      classes() {
        const { theme, mode } = this;
        return [
          `ant-menu-${theme}`,
          `ant-menu-${mode}`
        ];
      }
    },
    watch: {
      selectedKeys(value) {
        this.$broadcast('selected-menu', value);
      }
    },
    compiled() {
      this.$broadcast('selected-menu', this.selectedKeys);
      this.$broadcast('set-menu-mode', this.mode);
    },
    events: {
      'menu-click'(value) {
        this.onClick && this.onClick(value);
      }
    }
  };
</script>
