<template lang="html">
  <div>
    <code-box id="components-back-top-demo-basic" title="基本" :code="code" :description="description">
      <div slot="instance">
        <ant-back-top></ant-back-top>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './basic.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-back-top></ant-back-top>
      </div>
    `
  })
}
</script>
