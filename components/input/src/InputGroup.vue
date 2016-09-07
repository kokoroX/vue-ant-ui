<template lang="html">
  <span class="ant-input-group" :class="classes">
    <slot></slot>
  </span>
</template>

<script>
  import { curryingContains } from '_utils';
  export default {
    name: 'ant-input-group',
    props: {
      size: {
        type: String,
        default: 'default',
        validator: curryingContains(['large', 'default', 'small'])
      }
    },
    computed: {
      classes() {
        const { size } = this;
        return {
          'ant-input-group-lg': size === 'large',
          'ant-input-group-sm': size === 'small'
        };
      }
    }
  };
</script>

<style lang="css">
</style>
