<template lang="html">
  <div>
    <code-box id="components-rate-demo-half" title="半星" :code="code" :description="description">
      <div slot="instance">
        <ant-rate allow-half :default-value="2.5"></ant-rate>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './half.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-rate allow-half :default-value="2.5"></ant-rate>
      </div>
    `
  })
}
</script>
