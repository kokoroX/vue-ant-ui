<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <control></contraol>
    </ant-col>
    <ant-col span="12">
      <colorful></colorful>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Colorful from './Colorful'
import Control from './Control'

export default {
  components: {
    Basic,
    Colorful,
    Control
  }
}
</script>
