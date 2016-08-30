<template lang="html">
  <span></span>
</template>

<script>
import Vue from 'vue';
export default {
  props: {
    make: true
  },
  watch: {
    make() {
      this.toMake();
    }
  },
  methods: {
    toMake() {
      const { make } = this;
      let options = {};
      if (typeof make === 'string') {
        options.template = make;
      } else {
        options = make;
      }
      const Temp = Vue.extend(options);
      const instance = new Temp();
      instance.$mount().$appendTo(this.$el);
    }
  },
  ready() {
    this.toMake();
  },
  destroyed() {
    console.log(this);
  }
};
</script>

<style lang="css">
</style>
