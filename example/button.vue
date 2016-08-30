<template lang="html">
  <div>
    <ant-button :loading="demo">测试</ant-button>
    <ant-button @click="onClick">点击</ant-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    demo: false
  }),
  methods: {
    onClick() {
      this.demo = !this.demo;
    }
  }
};
</script>
