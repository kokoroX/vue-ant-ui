<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <info></info>
      <duration></duration>
    </ant-col>
    <ant-col span="12">
      <other></other>
      <loading></loading>
    </ant-col>
  </ant-row>
</template>

<script>
import Info from './Info'
import Other from './Other'
import Duration from './Duration'
import Loading from './Loading'

export default {
  components: {
    Info,
    Other,
    Duration,
    Loading
  }
}
</script>
