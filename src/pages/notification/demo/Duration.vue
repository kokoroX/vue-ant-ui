<template lang="html">
  <div>
    <code-box id="components-notification-demo-duration" title="自动关闭的延时" :code="code" :description="description">
      <div slot="instance">
        <ant-button type="primary" :on-click="openNotification">打开通知提醒框</ant-button>
      </div>
    </code-box>
  </div>
</template>

<script>
import { Notification } from 'vue-ant-ui'
import { template as description } from './duration.md'

export default {
  data: () => ({
    description,
    code: `
      <template lang="html">
        <div>
          <ant-button type="primary" :on-click="openNotification">打开通知提醒框</ant-button>
        </div>
      </template>

      \<script\>
      import { Notification } from 'vue-ant-ui'

      export default {
        methods: {
          openNotification () {
            const args = {
              message: '这是标题',
              description: '我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭',
              duration: 0
            }
            Notification.open(args)
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    openNotification () {
      const args = {
        message: '这是标题',
        description: '我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭',
        duration: 0
      }
      Notification.open(args)
    }
  }
}
</script>
