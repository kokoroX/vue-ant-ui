<template lang="html">
  <ant-row :gutter="16">
    <basic></basic>
    <border-less></border-less>
    <Simple></Simple>
    <no-padding></no-padding>
    <grid></grid>
    <loading></loading>
  </ant-row>
</template>

<script>
import Basic from './Basic'
import BorderLess from './BorderLess'
import Simple from './Simple'
import NoPadding from './NoPadding'
import Grid from './Grid'
import Loading from './Loading'

export default {
  components: {
    Basic,
    BorderLess,
    Simple,
    NoPadding,
    Grid,
    Loading
  }
}
</script>

<style>
.ant-card h3 {
  margin: 0;
}
.ant-card p {
  margin: 0;
}
</style>
