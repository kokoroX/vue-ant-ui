<template lang="html">
  <div>
    <code-box id="components-tag-demo-control" title="动态添加和删除" :code="code" :description="description">
      <div slot="instance">
        <ant-tag v-for="tag in tags" :closable="tag.key !== 1" :on-close="() => { handleClose(tag.key) }">{{tag.name}}</ant-tag>
        <ant-button size="small" type="dashed" :on-click="addTag">+ 添加标签</ant-button>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './colorful.md'
let index = 3

export default {
  data: () => ({
    tags: [
      { key: 1, name: '不可移除' },
      { key: 2, name: '标签二' },
      { key: 3, name: '标签三' }
    ],
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
    handleClose (key) {
      const tags = [...this.tags].filter(tag => (tag.key !== key) && tag)
      this.tags = tags
    },
    addTag () {
      const tags = [...this.tags]
      index += 1
      console.log(index)
      tags.push({ key: index, name: `新标签${index}` })
      this.tags = tags
    }
  }
}
</script>
