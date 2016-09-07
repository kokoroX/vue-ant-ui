<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
    </ant-col>
    <ant-col span="12">
      <placement></placement>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Placement from './Placement'

export default {
  components: {
    Basic,
    Placement
  }
}
</script>
