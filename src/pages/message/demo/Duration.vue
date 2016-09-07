<template lang="html">
  <div>
    <code-box id="components-message-demo-duration" title="修改延时" :code="code" :description="description">
      <div slot="instance">
        <ant-button :on-click="success">自定义时长提示</ant-button>
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
          <ant-button :on-click="success">自定义时长提示</ant-button>
        </div>
      </template>

      \<script\>
      import { Message } from 'vue-ant-ui'

      export default {
        methods: {
          info () {
            Message.success('这是一条成功的提示,并将于10秒后消失', 10)
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    success () {
      Message.success('这是一条成功的提示,并将于10秒后消失', 10)
    }
  }
}
</script>
