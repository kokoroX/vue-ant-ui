<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <disabled></disabled>
    </ant-col>
    <ant-col span="12">
      <size></size>
      <digit></digit>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Disabled from './Disabled'
import Size from './Size'
import Digit from './Digit'

export default {
  components: {
    Basic,
    Disabled,
    Size,
    Digit
  }
}
</script>
