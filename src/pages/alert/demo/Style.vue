<template lang="html">
  <div>
    <code-box id="components-alert-demo-style" title="四种样式" :code="code" :description="description">
      <div slot="instance">
        <ant-alert message="成功提示的文案" type="success"></ant-alert>
        <ant-alert message="消息提示的文案" type="info"></ant-alert>
        <ant-alert message="警告提示的文案" type="warning"></ant-alert>
        <ant-alert message="错误提示的文案" type="error"></ant-alert>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './style.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-alert message="成功提示的文案" type="success"></ant-alert>
        <ant-alert message="消息提示的文案" type="info"></ant-alert>
        <ant-alert message="警告提示的文案" type="warning"></ant-alert>
        <ant-alert message="错误提示的文案" type="error"></ant-alert>
      </div>
    `
  })
}
</script>
