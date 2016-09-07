<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
    </ant-col>
    <ant-col span="12">
      <with-icon></with-icon>
      <separator></separator>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import WithIcon from './WithIcon'
import Separator from './Separator'

export default {
  components: {
    Basic,
    WithIcon,
    Separator
  }
}
</script>
