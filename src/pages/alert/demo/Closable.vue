<template lang="html">
  <div>
    <code-box id="components-alert-demo-basic" title="可关闭的警告提示" :code="code" :description="description">
      <div slot="instance">
        <ant-alert message="警告提示的文案"
          type="warning"
          closable
          :on-close="onClose"
        ></ant-alert>
        <ant-alert message="错误提示的文案"
          description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
          type="error"
          closable
          :on-close="onClose"
        ></ant-alert>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './closable.md'

export default {
  data: () => ({
    description,
    code: `
      <template lang="html">
        <div>
          <ant-alert message="警告提示的文案"
            type="warning"
            closable
            :on-close="onClose"
          ></ant-alert>
          <ant-alert message="错误提示的文案"
            description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
            type="error"
            closable
            :on-close="onClose"
          ></ant-alert>
        </div>
      </template>

      \<script\>
      export default {
        methods: {
          onClose (e) {
            console.log(e, '我要被关闭啦！')
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    onClose (e) {
      console.log(e, '我要被关闭啦！')
    }
  }
}
</script>
