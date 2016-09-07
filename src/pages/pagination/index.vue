<template lang="html">
  <div class="pagination-page">
    <pagination-markdown class="markdown"></pagination-markdown>
  </div>
</template>

<script>
import PaginationMarkdown from './index.zh-CN.md'

export default {
  components: {
    PaginationMarkdown
  }
}
</script>

<style>
.pagination-page ul > li {
  list-style: none;
}
</style>
