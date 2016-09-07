<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <doc-footer></doc-footer>
      <confirm-promise></confirm-promise>
      <position></position>
    </ant-col>
    <ant-col span="12">
      <async></async>
      <confirm></confirm>
      <info></info>
      <manual></manual>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Async from './Async'
import DocFooter from './Footer'
import Confirm from './Confirm'
import ConfirmPromise from './ConfirmPromise'
import Info from './Info'
import Position from './Position'
import Manual from './Manual'

export default {
  components: {
    Basic,
    Async,
    DocFooter,
    Confirm,
    ConfirmPromise,
    Info,
    Position,
    Manual
  }
}
</script>
