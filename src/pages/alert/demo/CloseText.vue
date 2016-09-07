<template lang="html">
  <div>
    <code-box id="components-alert-demo-description" title="含有辅助性文字介绍" :code="code" :description="description">
      <div slot="instance">
        <ant-alert message="消息提示的文案" type="info" close-text="不再提醒"></ant-alert>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './basic.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-alert message="消息提示的文案" type="info" close-text="不再提醒"></ant-alert>
      </div>
    `
  })
}
</script>
