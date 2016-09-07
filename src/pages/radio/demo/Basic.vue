<template lang="html">
  <div>
    <code-box id="components-radio-demo-basic" title="基础布局" :code="code" :description="description">
      <div slot="instance">
        <ant-radio>Radio</ant-radio>
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
        <ant-radio>Radio</ant-radio>
      </div>
    `
  })
}
</script>
