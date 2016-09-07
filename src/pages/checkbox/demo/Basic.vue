<template lang="html">
  <div>
    <code-box id="components-checkbox-demo-basic" title="基本用法" :code="code" :description="description">
      <div slot="instance">
        <ant-checkbox :on-change="onChange">Checkbox</ant-checkbox>
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
      <div>
        <ant-checkbox :on-change="onChange">Checkbox</ant-checkbox>
      </div>

      methods: {
        onChange (e) {
          console.log(\`checked = \${e.target.checked}\`)
        }
      }
    `
  }),
  methods: {
    onChange (e) {
      console.log(`checked = ${e.target.checked}`)
    }
  }
}
</script>
