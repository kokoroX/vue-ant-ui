<template lang="html">
  <div class="ant-spin-nested-loading">
    <div class="ant-spin ant-spin-spinning" :class="classes">
      <span class="ant-spin-dot"></span>
      <div class="ant-spin-text">{{tip}}</div>
    </div>
    <div class="ant-spin-container">
      <slot></slot>
    </div>
    <slot name="demo"></slot>
  </div>
</template>

<script>
  import { curryingContains } from '../../_utils';

  export default {
    name: 'spin',

    props: {
      size: {
        type: String,
        default: 'default',
        validator: curryingContains(['small', 'default', 'large', undefined])
      },
      tip: {
        type: String,
        default: '加载中...'
      },
      spinning: Boolean
    },

    computed: {
      classes() {
        var size = this.size;
        var tip = this.tip;

        return {
          ['ant-spin-sm']: size === 'small',
          ['ant-spin-lg']: size === 'large',
          ['ant-spin-show-text']: tip !== '加载中...'
        };
      }
    },

    ready() {
      console.log(this._slotContents);
    }
  };
</script>

<style lang="scss">
</style>
