<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <with-icon></with-icon>
    </ant-col>
    <ant-col span="12">
      <duration></duration>
      <!-- <with-btn></with-btn> -->
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Duration from './Duration'
import WithIcon from './WithIcon'
// import WithBtn from './WithBtn'

export default {
  components: {
    Basic,
    Duration,
    WithIcon
    // WithBtn
  }
}
</script>
