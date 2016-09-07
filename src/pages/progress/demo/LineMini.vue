<template lang="html">
  <div>
    <code-box id="components-progress-demo-line-mini" title="进度条" :code="code" :description="description">
      <div slot="instance">
        <div style="width: 170px;">
          <ant-progress :percent="30" :stroke-width="5"></ant-progress>
          <ant-progress :percent="50" :stroke-width="5" status="active"></ant-progress>
          <ant-progress :percent="70" :stroke-width="5" status="exception"></ant-progress>
          <ant-progress :percent="100" :stroke-width="5"></ant-progress>
        </div>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './line-mini.md'

export default {
  data: () => ({
    description,
    code: `
      <div style="width: 170px;">
        <ant-progress :percent="30" :stroke-width="5"></ant-progress>
        <ant-progress :percent="50" :stroke-width="5" status="active"></ant-progress>
        <ant-progress :percent="70" :stroke-width="5" status="exception"></ant-progress>
        <ant-progress :percent="100" :stroke-width="5"></ant-progress>
      </div>
    `
  })
}
</script>
