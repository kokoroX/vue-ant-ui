<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
    </ant-col>
    <ant-col span="12">
      <custom></custom>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Custom from './Custom'

export default {
  components: {
    Basic,
    Custom
  }
}
</script>
