<template lang="html">
  <div>
    <code-box id="components-switch-demo-size" title="两种大小" :code="code" :description="description">
      <div slot="instance">
        <ant-switch></ant-switch>
        <ant-switch size="small"></ant-switch>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './size.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-switch></ant-switch>
        <ant-switch size="small"></ant-switch>
      </div>
    `
  })
}
</script>
