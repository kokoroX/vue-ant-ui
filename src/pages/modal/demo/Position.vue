<template lang="html">
  <div>
    <code-box id="components-modal-demo-position" title="自定义位置" :code="code" :description="description">
      <div slot="instance">
        <ant-button type="primary" :on-click="() => setModal1Visible(true)">显示距离顶部 20px 的对话框</ant-button>
        <ant-button type="primary" :on-click="() => setModal2Visible(true)">显示垂直居中的对话框</ant-button>
        <ant-modal
          title="距离顶部 20px 的对话框"
          :style="{top: '20px'}"
          :visible="modal1Visible"
          :on-ok="() => setModal1Visible(false)"
          :on-cancel="() => setModal1Visible(false)"
        >
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </ant-modal>
        <ant-modal
          title="垂直居中的对话框"
          wrap-class-name="vertical-center-modal"
          :visible="modal2Visible"
          :on-ok="() => setModal2Visible(false)"
          :on-cancel="() => setModal2Visible(false)"
        >
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </ant-modal>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './position.md'

export default {
  data: () => ({
    modal1Visible: false,
    modal2Visible: false,
    description,
    code: `
      <template lang="html">
        <div>
          <ant-button type="primary" :on-click="() => setModal1Visible(true)">显示距离顶部 20px 的对话框</ant-button>
          <ant-button type="primary" :on-click="() => setModal2Visible(true)">显示垂直居中的对话框</ant-button>
          <ant-modal
            title="距离顶部 20px 的对话框"
            :style="{top: '20px'}"
            :visible="modal1Visible"
            :on-ok="() => setModal1Visible(false)"
            :on-cancel="() => setModal1Visible(false)"
          >
            <p>对话框的内容</p>
            <p>对话框的内容</p>
            <p>对话框的内容</p>
          </ant-modal>
          <ant-modal
            title="垂直居中的对话框"
            wrap-class-name="vertical-center-modal"
            :visible="modal2Visible"
            :on-ok="() => setModal2Visible(false)"
            :on-cancel="() => setModal2Visible(false)"
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
          modal1Visible: false,
          modal2Visible: false
        }),
        methods: {
          setModal1Visible (modal1Visible) {
            this.modal1Visible = modal1Visible
          },
          setModal2Visible (modal2Visible) {
            this.modal2Visible = modal2Visible
          }
        }
      }
      \</script\>

      <style>
      /* 使用 css 技巧来动态设置的对话框位置 */
      .vertical-center-modal {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .vertical-center-modal .ant-modal {
        top: 0;
      }
      </style>
    `
  }),
  methods: {
    setModal1Visible (modal1Visible) {
      this.modal1Visible = modal1Visible
    },
    setModal2Visible (modal2Visible) {
      this.modal2Visible = modal2Visible
    }
  }
}
</script>

<style>
/* 使用 css 技巧来动态设置的对话框位置 */
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
}

.vertical-center-modal .ant-modal {
  top: 0;
}
</style>
