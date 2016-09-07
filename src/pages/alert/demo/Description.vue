<template lang="html">
  <div>
    <code-box id="components-alert-demo-description" title="含有辅助性文字介绍" :code="code" :description="description">
      <div slot="instance">
        <ant-alert
          message="成功提示的文案"
          description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"
          type="success">
        </ant-alert>
        <ant-alert
          message="消息提示的文案"
          description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
          type="info">
        </ant-alert>
        <ant-alert
          message="警告提示的文案"
          description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"
          type="warning">
        </ant-alert>
        <ant-alert
          message="错误提示的文案"
          description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
          type="error">
        </ant-alert>
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
        <ant-alert
          message="成功提示的文案"
          description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"
          type="success">
        </ant-alert>
        <ant-alert
          message="消息提示的文案"
          description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
          type="info">
        </ant-alert>
        <ant-alert
          message="警告提示的文案"
          description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"
          type="warning">
        </ant-alert>
        <ant-alert
          message="错误提示的文案"
          description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
          type="error">
        </ant-alert>
      </div>
    `
  })
}
</script>
