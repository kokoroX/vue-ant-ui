<template lang="html">
  <div>
    <code-box id="components-rate-demo-basic" title="基本" :code="code" :description="description">
      <div slot="instance">
        <ant-rate></ant-rate>
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
        <ant-rate></ant-rate>
      </div>
    `
  })
}
</script>
