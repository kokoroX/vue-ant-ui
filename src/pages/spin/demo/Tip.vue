<template lang="html">
  <div>
    <code-box id="components-spin-demo-tip" title="自定义描述文案" :code="code" :description="description">
      <div slot="instance">
        <ant-spin tip="正在读取数据...">
          <ant-alert message="消息提示的文案"
            description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
            type="info"
          ></ant-alert>
        </ant-spin>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './size.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-spin tip="正在读取数据...">
          <ant-alert message="消息提示的文案"
            description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
            type="info"
          ></ant-alert>
        </ant-spin>
      </div>
    `
  })
}
</script>
