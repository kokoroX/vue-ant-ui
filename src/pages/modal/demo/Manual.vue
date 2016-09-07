<template lang="html">
  <div>
    <code-box id="components-modal-demo-manual" title="手动移除" :code="code" :description="description">
      <div slot="instance">
        <ant-button :on-click="success">成功提示</ant-button>
      </div>
    </code-box>
  </div>
</template>

<script>
import { Modal } from 'vue-ant-ui'
import { template as description } from './manual.md'

export default {
  data: () => ({
    visible: false,
    description,
    code: `
      <template lang="html">
        <div>
          <ant-button :on-click="success">成功提示</ant-button>
        </div>
      </template>

      \<script\>
      import { Modal } from 'vue-ant-ui'

      export default {
        data: () => ({
          visible: false
        }),
        methods: {
          success () {
            const modal = Modal.success({
              title: '这是一条通知信息',
              content: '一秒后自动移除'
            })
            setTimeout(() => modal.destroy(), 1000)
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    success () {
      const modal = Modal.success({
        title: '这是一条通知信息',
        content: '一秒后自动移除'
      })
      setTimeout(() => modal.destroy(), 1000)
    }
  }
}
</script>
