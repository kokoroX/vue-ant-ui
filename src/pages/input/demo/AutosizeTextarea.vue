<template lang="html">
  <div>
    <code-box id="components-input-demo-addon" title="前置/后置标签" :code="code" :description="description">
      <div slot="instance">
        <h3>未实现</h3>
        <ant-input type="textarea" placeholder="自适应内容高度"></ant-input>
        <div style="margin: 24px 0;"></div>
        <ant-input type="textarea" placeholder="有最大高度和最小高度" :autosize="{ minRows: 2, maxRows: 6 }"></ant-input>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './autosize-textarea.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-input type="textarea" placeholder="自适应内容高度" autosize></ant-input>
        <div style="margin: 24px 0;"></div>
        <ant-input type="textarea" placeholder="有最大高度和最小高度" :autosize="{ minRows: 2, maxRows: 6 }"></ant-input>
      </div>
    `
  })
}
</script>
