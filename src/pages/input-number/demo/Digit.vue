<template lang="html">
  <div>
    <code-box id="components-input-number-demo-digit" title="基本" :code="code" :description="description">
      <div slot="instance">
        <ant-input-number min="1" max="10" step="0.1" :on-change="onChange"></ant-input-number>
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
        <ant-input-number min="1" max="10" default-value="3" :on-change="onChange"></ant-input-number>
      </div>
    `
  }),
  methods: {
    onChange (value) {
      console.log('changed', value)
    }
  }
}
</script>
