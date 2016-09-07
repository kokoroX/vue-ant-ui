<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <mix></mix>
    </ant-col>
    <ant-col span="12">
      <accordion></accordion>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Accordion from './Accordion'
import Mix from './Mix'

export default {
  components: {
    Basic,
    Accordion,
    Mix
  }
}
</script>
