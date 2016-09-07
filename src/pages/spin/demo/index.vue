<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <inside></inside>
      <tip></tip>
    </ant-col>
    <ant-col span="12">
      <size></size>
      <nested></nested>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Size from './Size'
import Inside from './Inside'
import Nested from './Nested'
import Tip from './Tip'

export default {
  components: {
    Basic,
    Size,
    Inside,
    Nested,
    Tip
  }
}
</script>
