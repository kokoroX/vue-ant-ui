<template>
  <div class="app">
    <doc-header></doc-header>
    <router-view></router-view>
  </div>
</template>

<script>
import DocHeader from 'components/DocHeader'

export default {
  components: {
    DocHeader
  }
}
</script>

<style>
.app {
  background: #ececec;
}
</style>
