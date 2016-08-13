<template lang="html">
  <div :class="{'ant-spin-nested-loading': spinning}" v-if="_slotContents.default">
    <div class="ant-spin" :class="classes">
      <span class="ant-spin-dot"></span>
      <div class="ant-spin-text">{{tip}}</div>
    </div>
    <div class="ant-spin-container">
      <slot></slot>
    </div>
  </div>
  <template v-else>
    <div class="ant-spin ant-spin-spinning" :class="classes">
      <span class="ant-spin-dot"></span>
      <div class="ant-spin-text">{{tip}}</div>
    </div>
  </template>
</template>

<script>
  import { curryingContains } from '../../_utils';

  export default {
    name: 'ant-spin',

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
      spinning: {
        type: Boolean,
        default: true
      }
    },

    computed: {
      classes() {
        const size = this.size;
        const tip = this.tip;
        const spinning = this.spinning;

        return {
          ['ant-spin-spinning']: spinning,
          ['ant-spin-sm']: size === 'small',
          ['ant-spin-lg']: size === 'large',
          ['ant-spin-show-text']: tip !== '加载中...'
        };
      }
    }
  };
</script>

<style lang="scss">
</style>
