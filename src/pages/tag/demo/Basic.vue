<template lang="html">
  <div>
    <code-box id="components-tag-demo-basic" title="基本" :code="code" :description="description">
      <div slot="instance">
        <ant-tag>标签一</ant-tag>
        <ant-tag>标签二</ant-tag>
        <ant-tag closable :on-close="onClose">标签三</ant-tag>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './basic.md'

export default {
  data: () => ({
    description,
    code: `
      <template lang="html">
        <div>
          <ant-tag>标签一</ant-tag>
          <ant-tag>标签二</ant-tag>
          <ant-tag closable :on-close="onClose">标签三</ant-tag>
        </div>
      </template>

      \<script\>
      export default {
        methods: {
          onClose (e) {
            console.log(e)
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    onClose (e) {
      console.log(e)
    }
  }
}
</script>
