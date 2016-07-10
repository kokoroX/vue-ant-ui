<template lang="html">
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ant-col',
    props: {
      span: Number,
      offset: Number,
      push: Number,
      pull: Number,
      order: Number,
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object]
    },
    computed: {
      classes() {
        const { span, offset, push, pull, order } = this;
        let sizeClassObj = {};

        ['xs', 'sm', 'md', 'lg'].forEach(size => {
          let sizeProps = {};
          if (typeof this[size] === 'number') {
            sizeProps.span = this.size;
          } else {
            sizeProps = this[size] || {};
          }
          sizeClassObj = {
            ...sizeClassObj,
            [`ant-col-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
            [`ant-col-${size}-order-${sizeProps.order}`]: sizeProps.order,
            [`ant-col-${size}-offset-${sizeProps.offset}`]: sizeProps.offset,
            [`ant-col-${size}-push-${sizeProps.push}`]: sizeProps.push,
            [`ant-col-${size}-pull-${sizeProps.pull}`]: sizeProps.pull
          };
        });

        return {
          [`ant-col-${span}`]: span,
          [`ant-col-offset-${offset}`]: offset,
          [`ant-col-push-${push}`]: push,
          [`ant-col-pull-${pull}`]: pull,
          [`ant-col-order-${order}`]: order,
          ...sizeClassObj
        };
      }
    }
  };
</script>
