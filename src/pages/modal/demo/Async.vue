<template lang="html">
  <div>
    <code-box id="components-modal-demo-async" title="异步关闭" :code="code" :description="description">
      <div slot="instance">
        <ant-button type="primary" :on-click="showModal">显示对话框</ant-button>
        <ant-modal title="对话框标题"
          :visible="visible"
          :on-ok="handleOk"
          :on-cancel="handleCancel"
          :confirm-loading="confirmLoading"
        >
          <p>{{ModalText}}</p>
        </ant-modal>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './async.md'

export default {
  data: () => ({
    ModalText: '对话框的内容',
    visible: false,
    description,
    code: `
      <template lang="html">
        <div>
          <ant-button type="primary" :on-click="showModal">显示对话框</ant-button>
          <ant-modal title="第一个 Modal" :visible="visible"
            :on-ok="handleOk" :on-cancel="handleCancel"
          >
            <p>对话框的内容</p>
            <p>对话框的内容</p>
            <p>对话框的内容</p>
          </ant-modal>
        </div>
      </template>

      \<script\>
      export default {
        data: () => ({
          visible: false
        }),
        methods: {
          showModal () {
            this.visible = true
          },
          handleOk () {
            console.log('点击了确定')
            this.visible = false
          },
          handleCancel (e) {
            console.log(e)
            this.visible = false
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk () {
      this.ModalText = '对话框将在两秒后关闭'
      this.confirmLoading = true
      setTimeout(() => {
        this.visible = false
        this.confirmLoading = false
      }, 2000)
    },
    handleCancel () {
      console.log('点击了取消')
      this.visible = false
    }
  }
}
</script>
