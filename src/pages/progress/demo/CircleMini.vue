<template lang="html">
  <div>
    <code-box id="components-progress-demo-circle-mini" title="进度条" :code="code" :description="description">
      <div slot="instance">
        <ant-progress type="circle" :percent="30" :width="80"></ant-progress>
        <ant-progress type="circle" :percent="70" :width="80" status="exception"></ant-progress>
        <ant-progress type="circle" :percent="100" :width="80"></ant-progress>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './circle-mini.md'

export default {
  data: () => ({
    description,
    code: `
      <div style="width: 170px;">
        <ant-progress type="circle" :percent="30" :width="80"></ant-progress>
        <ant-progress type="circle" :percent="70" :width="80" status="exception"></ant-progress>
        <ant-progress type="circle" :percent="100" :width="80"></ant-progress>
      </div>
    `
  })
}
</script>
