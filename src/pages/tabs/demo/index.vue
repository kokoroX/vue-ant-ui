<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
    </ant-col>
    <ant-col span="12"></ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'

export default {
  components: {
    Basic
  }
}
</script>
