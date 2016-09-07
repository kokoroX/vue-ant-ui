<template lang="html">
  <div>
    <code-box id="components-modal-demo-confirm" title="确认对话框" :code="code" :description="description">
      <div slot="instance">
        <ant-button :on-click="showConfirm">
          确认对话框
        </ant-button>
      </div>
    </code-box>
  </div>
</template>

<script>
import { Modal } from 'vue-ant-ui'
import { template as description } from './confirm.md'

export default {
  data: () => ({
    visible: false,
    description,
    code: `
      <template lang="html">
        <div>
          <ant-button :on-click="showConfirm">
            确认对话框
          </ant-button>
        </div>
      </template>

      \<script\>
      import { Modal } from 'vue-ant-ui'

      export default {
        data: () => ({
          visible: false
        }),
        methods: {
          showConfirm () {
            Modal.confirm({
              title: '您是否确认要删除这项内容',
              content: '一些解释',
              onOk () {
                console.log('确定')
              },
              onCancel () {}
            })
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    showConfirm () {
      Modal.confirm({
        title: '您是否确认要删除这项内容',
        content: '一些解释',
        onOk () {
          console.log('确定')
        },
        onCancel () {}
      })
    }
  }
}
</script>
