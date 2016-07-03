<template>
  <button :type="htmlType"
    :class="classes">
    <icon :type="iconType"></icon>
    <!-- todo slot外面本有一层span -->
    <!-- <span></span> -->
    <slot></slot>
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
      }
      // onClick: {
      //   type: Function,
      //   default: () => {}
      // }
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
        // console.log(this);
        let prefixCls = this.prefixCls;
        // let hasContent = this.hasContent;
        // let icon = this.icon;
        let size = this.size;
        let type = this.type;
        let shape = this.shape;
        let loading = this.loading;

        const sizeCls = ({
          large: 'lg',
          small: 'sm'
        })[size] || '';

        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}-${type}`]: type,
          [`${prefixCls}-${sizeCls}`]: size,
          [`${prefixCls}-${shape}`]: shape,
          [`${prefixCls}-loading`]: loading
          // [`${prefixCls}-icon-only`]: !hasContent && icon
        };
      }
    }
  };
</script>

<style></style>
