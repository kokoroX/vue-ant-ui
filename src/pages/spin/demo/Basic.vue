<template lang="html">
  <div>
    <code-box id="components-spin-demo-basic" title="基本用法" :code="code" :description="description">
      <div slot="instance">
        <ant-spin></ant-spin>
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
        <ant-spin></ant-spin>
      </div>
    `
  })
}
</script>
