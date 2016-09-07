<template lang="html">
  <div>
    <code-box id="components-message-demo-loading" title="加载中" :code="code" :description="description">
      <div slot="instance">
        <ant-button :on-click="success">显示加载中</ant-button>
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
          <code-box id="components-message-demo-loading" title="加载中" :code="code" :description="description">
            <div slot="instance">
              <ant-button :on-click="success">显示加载中</ant-button>
            </div>
          </code-box>
        </div>
      </template>

      \<script\>
      import { Message } from 'vue-ant-ui'

      export default {
        methods: {
          success () {
            const hide = Message.loading('正在执行中...', 0)
            setTimeout(hide, 2500)
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    success () {
      const hide = Message.loading('正在执行中...', 0)
      setTimeout(hide, 2500)
    }
  }
}
</script>
