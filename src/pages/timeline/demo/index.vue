<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <pending></pending>
    </ant-col>
    <ant-col span="12">
      <color></color>
      <custom></custom>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Color from './Color'
import Pending from './Pending'
import Custom from './Custom'

export default {
  components: {
    Basic,
    Color,
    Pending,
    Custom
  }
}
</script>

<style>
.markdown .ant-timeline-item p {
  margin: 0;
}
</style>
