<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
    </ant-col>
    <ant-col span="12">
      <more></more>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import More from './More'

export default {
  components: {
    Basic,
    More
  }
}
</script>
