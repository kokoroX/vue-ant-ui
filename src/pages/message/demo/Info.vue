<template lang="html">
  <div>
    <code-box id="components-message-demo-info" title="普通提示" :code="code" :description="description">
      <div slot="instance">
        <ant-button type="primary" :on-click="info">显示普通提醒</ant-button>
      </div>
    </code-box>
  </div>
</template>

<script>
import { Message } from 'vue-ant-ui'
import { template as description } from './info.md'

export default {
  data: () => ({
    description,
    code: `
      <template lang="html">
        <div>
          <ant-button type="primary" :on-click="info">显示普通提醒</ant-button>
        </div>
      </template>

      \<script\>
      import { Message } from 'vue-ant-ui'

      export default {
        methods: {
          info () {
            Message.info('这是一条普通的提醒')
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    info () {
      Message.info('这是一条普通的提醒')
    }
  }
}
</script>
