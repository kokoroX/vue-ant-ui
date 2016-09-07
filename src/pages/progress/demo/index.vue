<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <line></line>
      <line-mini></line-mini>
      <circle-dynamic></circle-dynamic>
      <format></format>
    </ant-col>
    <ant-col span="12">
      <circle></circle>
      <circle-mini></circle-mini>
      <dynamic></dynamic>
    </ant-col>
  </ant-row>
</template>

<script>
import Line from './Line'
import Circle from './Circle'
import LineMini from './LineMini'
import CircleMini from './CircleMini'
import CircleDynamic from './CircleDynamic'
import Dynamic from './Dynamic'
import Format from './Format'

export default {
  components: {
    Line,
    Circle,
    LineMini,
    CircleMini,
    CircleDynamic,
    Dynamic,
    Format
  }
}
</script>
