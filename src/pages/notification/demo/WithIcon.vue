<template lang="html">
  <div>
    <code-box id="components-notification-demo-with-icon" title="自动关闭的延时" :code="code" :description="description">
      <div slot="instance">
        <ant-button :on-click="openNotificationWithIcon('success')">成功</ant-button>
        <ant-button :on-click="openNotificationWithIcon('info')">消息</ant-button>
        <ant-button :on-click="openNotificationWithIcon('warning')">警告</ant-button>
        <ant-button :on-click="openNotificationWithIcon('error')">错误</ant-button>
      </div>
    </code-box>
  </div>
</template>

<script>
import { Notification } from 'vue-ant-ui'
import { template as description } from './with-icon.md'

export default {
  data: () => ({
    description,
    code: `
      <template lang="html">
        <div>
          <ant-button :on-click="openNotificationWithIcon('success')">成功</ant-button>
          <ant-button :on-click="openNotificationWithIcon('info')">消息</ant-button>
          <ant-button :on-click="openNotificationWithIcon('warning')">警告</ant-button>
          <ant-button :on-click="openNotificationWithIcon('error')">错误</ant-button>
        </div>
      </template>

      \<script\>
      import { Notification } from 'vue-ant-ui'

      export default {
        methods: {
          openNotificationWithIcon (type) {
            return function () {
              Notification[type]({
                message: '这是标题',
                description: '这是提示框的文案这是提示框示框的文案这是提示是提示框的文案这是提示框的文案'
              })
            }
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    openNotificationWithIcon (type) {
      return function () {
        Notification[type]({
          message: '这是标题',
          description: '这是提示框的文案这是提示框示框的文案这是提示是提示框的文案这是提示框的文案'
        })
      }
    }
  }
}
</script>
