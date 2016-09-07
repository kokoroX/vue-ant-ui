<template lang="html">
  <div>
    <code-box id="components-message-demo-other" title="其他提示类型" :code="code" :description="description">
      <div slot="instance">
        <ant-button :on-click="success">显示成功提示</ant-button>
        <ant-button :on-click="error">显示报错提示</ant-button>
        <ant-button :on-click="warning">显示警告提示</ant-button>
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
          <ant-button :on-click="success">显示成功提示</ant-button>
          <ant-button :on-click="error">显示报错提示</ant-button>
          <ant-button :on-click="warning">显示警告提示</ant-button>
        </div>
      </template>

      \<script\>
      import { Message } from 'vue-ant-ui'

      export default {
        methods: {
          success () {
            Message.success('这是一条成功提示')
          },
          error () {
            Message.error('这是一条报错提示')
          },
          warning () {
            Message.warning('这是一条警告提示')
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    success () {
      Message.success('这是一条成功提示')
    },
    error () {
      Message.error('这是一条报错提示')
    },
    warning () {
      Message.warning('这是一条警告提示')
    }
  }
}
</script>
