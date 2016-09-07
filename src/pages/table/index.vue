<template lang="html">
  <div class="table-page">
    <table-markdown class="markdown"></table-markdown>
  </div>
</template>

<script>
import TableMarkdown from './index.zh-CN.md'

export default {
  components: {
    TableMarkdown
  }
}
</script>

<style>
.table-page ul > li {
  list-style: none;
}
</style>
