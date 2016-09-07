<template lang="html">
  <div>
    <code-box id="components-switch-demo-basic" title="简单" :code="code" :description="description">
      <div slot="instance">
        <ant-switch :default-checked="false" :on-change="onChange"></ant-switch>
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
        <ant-switch :default-checked="false" :on-change="onChange"></ant-switch>
      </div>
    `
  }),
  methods: {
    onChange (checked) {
      console.log(`switch to ${checked}`)
    }
  }
}
</script>
