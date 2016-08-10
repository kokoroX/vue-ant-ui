<template lang="html">
  <li :class="classes" @click="handleClick" @mousemove="handleHover">
    <div class="ant-rate-star-content"></div>
  </li>
</template>

<script>
export default {
  name: 'ant-star',
  props: {
    value: Number,
    index: Number,
    allowHalf: Boolean,
    disabled: Boolean,
    onHover: Function,
    onClick: Function
  },
  computed: {
    classes() {
      const { index, value, allowHalf, disabled } = this;
      const starValue = index + 1;
      const isHalf = allowHalf && value + 0.5 === starValue;
      return [
        'ant-rate-star',
        {
          'ant-rate-star-half': isHalf,
          'ant-rate-star-active': isHalf,
          'ant-rate-star-full': starValue <= value,
          'ant-rate-star-zero': starValue > value,
          'ant-rate-disabled': disabled
        }
      ];
    }
  },
  methods: {
    handleClick(e) {
      !this.disabled && this.onClick && this.onClick(e, this.index);
    },
    handleHover(e) {
      !this.disabled && this.onHover && this.onHover(e, this.index);
    }
  }
};
</script>
