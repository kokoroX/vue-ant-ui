<template lang="html">
  <div class="form-page">
    <form-markdown class="markdown"></form-markdown>
  </div>
</template>

<script>
import FormMarkdown from './index.zh-CN.md'

export default {
  components: {
    FormMarkdown
  }
}
</script>

<style>
.form-page .markdown p, .markdown pre {
    margin: 0;
}
</style>
