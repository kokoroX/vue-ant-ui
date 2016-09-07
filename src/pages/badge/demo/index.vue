<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <plus></plus>
      <dot></dot>
      <overflow></overflow>
    </ant-col>
    <ant-col span="12">
      <no-wrapper></no-wrapper>
      <link></link>
      <change></change>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Plus from './Plus'
import Dot from './Dot'
import Overflow from './Overflow'
import NoWrapper from './NoWrapper'
import Link from './Link'
import Change from './Change'

export default {
  components: {
    Basic,
    Plus,
    Dot,
    Overflow,
    NoWrapper,
    Link,
    Change
  }
}
</script>

<style>
.ant-badge {
  margin-right: 16px;
}
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 6px;
  background: #eee;
  display: inline-block;
}
.ant-badge p {
  margin: 0;
}
</style>
