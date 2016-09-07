<template lang="html">
  <div>
    <code-box id="components-modal-demo-confirm-promise" title="确认对话框" :code="code" :description="description">
      <div slot="instance">
        <ant-button :on-click="info">信息提示</ant-button>
        <ant-button :on-click="success">成功提示</ant-button>
        <ant-button :on-click="error">失败提示</ant-button>
        <ant-button :on-click="warning">警告提示</ant-button>
      </div>
    </code-box>
  </div>
</template>

<script>
import { Modal } from 'vue-ant-ui'
import { template as description } from './info.md'

export default {
  data: () => ({
    visible: false,
    description,
    code: `
      <template lang="html">
        <div>
          <ant-button :on-click="info">信息提示</ant-button>
          <ant-button :on-click="success">成功提示</ant-button>
          <ant-button :on-click="error">失败提示</ant-button>
          <ant-button :on-click="warning">警告提示</ant-button>
        </div>
      </template>

      \<script\>
      import { Modal } from 'vue-ant-ui'

      export default {
        data: () => ({
          visible: false
        }),
        methods: {
          info () {
            Modal.info({
              title: '这是一条通知信息',
              content: (\`
                <div>
                  <p>一些附加信息一些附加信息一些附加信息</p>
                  <p>一些附加信息一些附加信息一些附加信息</p>
                </div>\`
              ),
              onOk () {}
            })
          },
          success () {
            Modal.success({
              title: '这是一条通知信息',
              content: '一些附加信息一些附加信息一些附加信息'
            })
          },
          error () {
            Modal.error({
              title: '这是一条通知信息',
              content: '一些附加信息一些附加信息一些附加信息'
            })
          },
          warning () {
            Modal.warning({
              title: '这是一条警告信息',
              content: '一些附加信息一些附加信息一些附加信息'
            })
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    info () {
      Modal.info({
        title: '这是一条通知信息',
        content: (`
          <div>
            <p>一些附加信息一些附加信息一些附加信息</p>
            <p>一些附加信息一些附加信息一些附加信息</p>
          </div>`
        ),
        onOk () {}
      })
    },
    success () {
      Modal.success({
        title: '这是一条通知信息',
        content: '一些附加信息一些附加信息一些附加信息'
      })
    },
    error () {
      Modal.error({
        title: '这是一条通知信息',
        content: '一些附加信息一些附加信息一些附加信息'
      })
    },
    warning () {
      Modal.warning({
        title: '这是一条警告信息',
        content: '一些附加信息一些附加信息一些附加信息'
      })
    }
  }
}
</script>
