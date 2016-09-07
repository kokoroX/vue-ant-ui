<template lang="html">
  <div>
    <code-box id="components-spin-demo-size" title="各种大小" :code="code" :description="description">
      <div slot="instance">
        <ant-spin size="small"></ant-spin>
        <ant-spin></ant-spin>
        <ant-spin size="large"></ant-spin>
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
        <ant-spin size="small"></ant-spin>
        <ant-spin></ant-spin>
        <ant-spin size="large"></ant-spin>
      </div>
    `
  })
}
</script>
