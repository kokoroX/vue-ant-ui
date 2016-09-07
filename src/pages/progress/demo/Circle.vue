<template lang="html">
  <div>
    <code-box id="components-progress-demo-circle" title="进度条" :code="code" :description="description">
      <div slot="instance">
        <ant-progress type="circle" :percent="75"></ant-progress>
        <ant-progress type="circle" :percent="70" status="exception"></ant-progress>
        <ant-progress type="circle" :percent="100"></ant-progress>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './circle.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-progress type="circle" :percent="75"></ant-progress>
        <ant-progress type="circle" :percent="70" status="exception"></ant-progress>
        <ant-progress type="circle" :percent="100"></ant-progress>
      </div>
    `
  })
}
</script>
