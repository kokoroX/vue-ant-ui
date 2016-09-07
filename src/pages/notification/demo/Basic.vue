<template lang="html">
  <div>
    <code-box id="components-notification-demo-duration" title="基本" :code="code" :description="description">
      <div slot="instance">
        <ant-button type="primary" :on-click="openNotification">打开通知提醒框</ant-button>
      </div>
    </code-box>
  </div>
</template>

<script>
import { Notification } from 'vue-ant-ui'
import { template as description } from './basic.md'

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
            Notification.open({
              message: '这是标题',
              description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案'
            })
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    openNotification () {
      Notification.open({
        message: '这是标题',
        description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案'
      })
    }
  }
}
</script>
