<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <radio-group></radio-group>
      <radio-button></radio-button>
    </ant-col>
    <ant-col span="12">
      <disable></disable>
      <radio-group-more></radio-group-more>
      <size></size>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Disable from './Disable'
import RadioGroup from './RadioGroup'
import RadioGroupMore from './RadioGroupMore'
import RadioButton from './RadioButton'
import Size from './Size'

export default {
  components: {
    Basic,
    Disable,
    RadioGroup,
    RadioGroupMore,
    RadioButton,
    Size
  }
}
</script>
