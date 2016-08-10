<template>
  <button :type="htmlType"
    :class="classes" @click="onClick">
    <icon :type="iconType" v-if="iconType"></icon>
    <span v-if="_slotContents">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  import { curryingContains } from '../../_utils';

  import Icon from '../../icon';

  export default {
    name: 'ant-button',

    props: {
      prefixCls: {
        type: String,
        default: 'ant-btn'
      },
      type: {
        type: String,
        validator: curryingContains(['primary', 'ghost', 'dashed', undefined])
      },
      htmlType: {
        type: String,
        default: 'button',
        validator: curryingContains(['submit', 'reset', 'button', 'menu', undefined])
      },
      icon: String,
      shape: {
        type: String,
        validator: curryingContains(['circle', 'circle-outline', undefined])
      },
      size: {
        type: String,
        validator: curryingContains(['small', 'large', undefined])
      },
      loading: {
        type: Boolean,
        default: false
      },
      onClick: {
        type: Function,
        default: () => {}
      }
    },

    components: {
      Icon
    },

    computed: {
      // hasContent() {
      //   var content = this.$els['content'] || null;
      //
      //   return content.innerText.replace(/^\s+$/, '');
      // },

      iconType() {
        return this.loading ? 'loading' : this.icon;
      },

      classes() {
        const { prefixCls, icon, size, type, shape, loading } = this;

        const sizeCls = ({
          large: 'lg',
          small: 'sm'
        })[size] || '';

        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}-${type}`]: type,
          [`${prefixCls}-${sizeCls}`]: size,
          [`${prefixCls}-${shape}`]: shape,
          [`${prefixCls}-loading`]: loading,
          [`${prefixCls}-icon-only`]: !this._slotContents && icon
        };
      }
    }
  };
</script>

<style></style>
