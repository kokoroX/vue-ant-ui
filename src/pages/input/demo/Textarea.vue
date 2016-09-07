<template lang="html">
  <div>
    <code-box id="components-input-demo-addon" title="前置/后置标签" :code="code" :description="description">
      <div slot="instance">
        <ant-input type="textarea" rows="4"></ant-input>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './textarea.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-input type="textarea" rows="4"></ant-input>
      </div>
    `
  })
}
</script>
