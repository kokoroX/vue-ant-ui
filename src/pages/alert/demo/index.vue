<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <closable></closable>
      <icon></icon>
    </ant-col>
    <ant-col span="12">
      <doc-style></doc-style>
      <description></description>
      <close-text></close-text>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import DocStyle from './Style'
import Closable from './Closable'
import Description from './Description'
import Icon from './Icon'
import CloseText from './CloseText'

export default {
  components: {
    Basic,
    DocStyle,
    Closable,
    Description,
    Icon,
    CloseText
  }
}
</script>
