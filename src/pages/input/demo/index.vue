<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <addon></addon>
      <search-input></search-input>
      <autosize-textarea></autosize-textarea>
    </ant-col>
    <ant-col span="12">
      <size></size>
      <group></group>
      <doc-textarea></doc-textarea>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Addon from './Addon'
import SearchInput from './SearchInput'
import Size from './Size'
import Group from './Group'
import DocTextarea from './textarea'
import AutosizeTextarea from './AutosizeTextarea'

export default {
  components: {
    Basic,
    Addon,
    SearchInput,
    Size,
    Group,
    DocTextarea,
    AutosizeTextarea
  }
}
</script>
