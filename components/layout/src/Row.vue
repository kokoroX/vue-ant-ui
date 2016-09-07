<template lang="html">
  <div :class="classes" :style="{ marginLeft: `${-gutter/2}px`, marginRight: `${-gutter/2}px` }">
    <slot></slot>
  </div>
</template>

<script>
  import { curryingContains } from '../../_utils';
  export default {
    name: 'ant-row',
    props: {
      gutter: {
        type: Number,
        default: 0
      },
      type: {
        type: String,
        validator: curryingContains(['flex', undefined])
      },
      align: {
        type: String,
        default: 'top',
        validator: curryingContains(['top', 'middle', 'bottom'])
      },
      justify: {
        type: String,
        default: 'start',
        validator: curryingContains(['start', 'end', 'center', 'space-around', 'space-between'])
      }
    },
    computed: {
      classes() {
        const type = this.type;
        const align = this.align;
        const justify = this.justify;

        return {
          'ant-row': !type,
          'ant-row-flex': type === 'flex',
          [`ant-row-flex-${align}`]: type === 'flex' && align,
          [`ant-row-flex-${justify}`]: type === 'flex' && justify
        };
      }
    },
    compiled() {
      if (!this.gutter) return;
      this.$children.map(children => {
        children.$el.style.paddingLeft = `${this.gutter / 2}px`;
        children.$el.style.paddingRight = `${this.gutter / 2}px`;
      });
    }
  };
</script>
