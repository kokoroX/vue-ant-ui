<template lang="html">
  <ant-row :gutter="16">
    <ant-col span="12">
      <basic></basic>
      <controller></controller>
    </ant-col>
    <ant-col span="12">
      <disabled></disabled>
      <group></group>
    </ant-col>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import Disabled from './Disabled'
import Controller from './Controller'
import Group from './Group'

export default {
  components: {
    Basic,
    Disabled,
    Controller,
    Group
  }
}
</script>
