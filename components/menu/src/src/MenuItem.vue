<template lang="html">
  <li class="ant-menu-item" role="menuitem" aria-selected="true"
    :class="classes"
    @mouseover="!disabled && (active = true)"
    @mouseout="active = false"
    @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
  import { contains } from '_utils';

  export default {
    name: 'ant-menu-item',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      key: String
    },
    data() {
      return {
        active: false,
        selected: false
      };
    },
    methods: {
      handleClick(e) {
        if (this.disabled) return false;
        this.$dispatch('menu-click', {
          key: this.key,
          item: this,
          domEvent: e
        });
      }
    },
    computed: {
      classes() {
        const { selected, disabled, active } = this;
        return {
          'ant-menu-item-selected': selected,
          'ant-menu-item-disabled': disabled,
          'ant-menu-item-active': active
        };
      }
    },
    events: {
      'selected-menu'(arr) {
        this.selected = !this.disabled && contains(arr, this.key);
      }
    }
  };
</script>
