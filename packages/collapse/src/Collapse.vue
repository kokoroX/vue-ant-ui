<template lang="html">
  <div class="ant-collapse">
    <slot></slot>
  </div>
</template>

<script>
  import { contains } from '_utils';
  export default {
    name: 'ant-collapse',
    props: {
      activeKey: {
        type: [Array, String],
        default: () => []
      },
      accordion: Boolean,
      onChange: Function
    },
    compiled() {
      if (this.activeKey && this.activeKey.length) this.select(this.activeKey);
    },
    methods: {
      select(value) {
        // this.value = value;
        this.$broadcast('selected', value);
        this.onChange && this.onChange(value);
      }
    },
    events: {
      'toggle-selected'(value) {
        if (contains(this.activeKey, value)) {
          let index = this.activeKey.indexOf(value);
          this.activeKey.splice(index, 1);
        } else {
          if (this.accordion) this.activeKey = [];
          this.activeKey.push(value);
        }
        this.select(this.activeKey);
        return true;
      }
    }
  };
</script>
