<template lang="html">
  <ul class="ant-rate" :class="{'ant-rate-disabled': disabled}" @mouseleave="onMouseLeave">
    <ant-star v-for="($index, item) in count"
      :index="$index"
      :value="currentValue"
      :allow-half="allowHalf"
      :disabled="disabled"
      :on-click="handleClick"
      :on-hover="handleHover">
    </ant-star>
  </ul>
</template>

<script>
export default {
  name: 'ant-rate',
  props: {
    count: {
      type: Number,
      default: 5
    },
    value: Number,
    defaultValue: {
      type: Number,
      default: 0
    },
    onChange: Function,
    allowHalf: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    hoverValue: null
  }),
  computed: {
    currentValue() {
      const { hoverValue, value } = this;
      return hoverValue !== null ? hoverValue : value;
    }
  },
  methods: {
    onMouseLeave() {
      this.hoverValue = null;
    },
    handleClick(e, index) {
      const step = (this.allowHalf && e.target !== e.currentTarget) ? 0.5 : 1;
      this.value = index + step;
      this.onChange && this.onChange(this.value);
    },
    handleHover(e, index) {
      const step = (this.allowHalf && e.target !== e.currentTarget) ? 0.5 : 1;
      this.hoverValue = index + step;
    }
  },
  created() {
    const { value, defaultValue } = this;
    if (!value) this.value = defaultValue;
  }
};
</script>
