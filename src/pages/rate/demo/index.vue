<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <text></text>
    </ant-col>
    <ant-col span="12">
      <half></half>
      <disabled></disabled>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Text from './Text'
import Half from './Half'
import Disabled from './Disabled'

export default {
  components: {
    Basic,
    Text,
    Half,
    Disabled
  }
}
</script>
