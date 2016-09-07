<template lang="html">
  <div>
    <code-box id="components-tag-demo-colorful" title="各种类型" :code="code" :description="description">
      <div slot="instance">
        <ant-tag closable color="blue">蓝色</ant-tag>
        <ant-tag closable color="green">绿色</ant-tag>
        <ant-tag closable color="yellow"><a href="http://163.com">黄色</a></ant-tag>
        <ant-tag closable color="red">红色</ant-tag>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './colorful.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-tag closable color="blue">蓝色</ant-tag>
        <ant-tag closable color="green">绿色</ant-tag>
        <ant-tag closable color="yellow"><a href="http://163.com">黄色</a></ant-tag>
        <ant-tag closable color="red">红色</ant-tag>
      </div>
    `
  }),
  methods: {
    onClose (e) {
      console.log(e)
    }
  }
}
</script>
