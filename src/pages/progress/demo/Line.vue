<template lang="html">
  <div>
    <code-box id="components-progress-demo-line" title="进度条" :code="code" :description="description">
      <div slot="instance">
        <ant-progress :percent="30"></ant-progress>
        <ant-progress :percent="50" status="active"></ant-progress>
        <ant-progress :percent="70" status="exception"></ant-progress>
        <ant-progress :percent="100"></ant-progress>
        <ant-progress :percent="50" :show-info="false"></ant-progress>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './line.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-progress :percent="30"></ant-progress>
        <ant-progress :percent="50" status="active"></ant-progress>
        <ant-progress :percent="70" status="exception"></ant-progress>
        <ant-progress :percent="100"></ant-progress>
        <ant-progress :percent="50" :show-info="false"></ant-progress>
      </div>
    `
  })
}
</script>
