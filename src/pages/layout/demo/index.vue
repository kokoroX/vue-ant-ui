<template lang="html">
  <ant-row :gutter="16">
    <basic></basic>
    <gutter></gutter>
    <offset></offset>
    <sort></sort>
    <flex></flex>
    <flex-align></flex-align>
    <flex-order></flex-order>
    <reponsive></reponsive>
    <reponsive-more></reponsive-more>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Gutter from './Gutter'
import Offset from './Offset'
import Sort from './Sort'
import Flex from './Flex'
import FlexAlign from './FlexAlign'
import FlexOrder from './FlexOrder'
import Reponsive from './Reponsive'
import ReponsiveMore from './ReponsiveMore'

export default {
  components: {
    Basic,
    Gutter,
    Offset,
    Sort,
    Flex,
    FlexAlign,
    FlexOrder,
    Reponsive,
    ReponsiveMore
  }
}
</script>
