<template lang="html">
  <div>
    <code-box id="components-progress-demo-format" title="自定义文字格式" :code="code" :description="description">
      <div slot="instance">
        <ant-progress type="circle" :percent="75" :format="discount"></ant-progress>
        <ant-progress type="circle" :percent="100" :format="success"></ant-progress>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './format.md'

export default {
  data: () => ({
    percent: 0,
    description,
    code: `
      <div>
        <ant-progress type="circle" :percent="75"></ant-progress>
        <ant-progress type="circle" :percent="70" status="exception"></ant-progress>
        <ant-progress type="circle" :percent="100"></ant-progress>
      </div>
    `
  }),
  methods: {
    discount: percent => {
      return `${percent / 10.0}折`
    },
    success: () => {
      return '成功'
    }
  }
}
</script>
