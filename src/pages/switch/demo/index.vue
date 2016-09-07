<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <text></text>
    </ant-col>
    <ant-col span="12">
      <disabled></disabled>
      <size></size>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Disabled from './Disabled'
import Text from './Text'
import Size from './Size'

export default {
  components: {
    Basic,
    Disabled,
    Text,
    Size
  }
}
</script>

<style>
.ant-switch {
  display: block;
  margin-bottom: 8px;
}
</style>
