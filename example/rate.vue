<template lang="html">
  <div>
    <ant-rate></ant-rate>

    <ant-rate allow-half :default-value="2.5"></ant-rate>

    <span>
      <ant-rate allow-half :value="value" :on-change="handleChange"></ant-rate>
      <span className="ant-rate-text">{{value}} 星</span>
    </span>

    <ant-rate disabled :default-value="2.5"></ant-rate>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 3
  }),
  methods: {
    handleChange(value) {
      this.value = value;
    }
  }
};
</script>
