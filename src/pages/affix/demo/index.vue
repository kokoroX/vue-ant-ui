<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <bottom></bottom>
    </ant-col>
    <ant-col span="12">
      <offset></offset>
      <on-change></on-change>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Offset from './Offset'
import Bottom from './Bottom'
import OnChange from './OnChange'

export default {
  components: {
    Basic,
    Offset,
    Bottom,
    OnChange
  }
}
</script>
