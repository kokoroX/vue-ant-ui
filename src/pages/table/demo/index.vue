<template lang="html">
  <ant-row :gutter="16">
    <basic></basic>
    <row-selection></row-selection>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import RowSelection from './RowSelection'

export default {
  components: {
    Basic,
    RowSelection
  }
}
</script>
