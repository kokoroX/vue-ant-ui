<template lang="html">
  <div>
    <code-box id="components-input-number-demo-size" title="三种大小" :code="code" :description="description">
      <div slot="instance">
        <ant-input-number size="large" min="1" max="100000" default-value="3" :on-change="onChange"></ant-input-number>
        <ant-input-number min="1" max="100000" default-value="3" :on-change="onChange"></ant-input-number>
        <ant-input-number size="small" min="1" max="100000" default-value="3" :on-change="onChange"></ant-input-number>
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
        <ant-input-number size="large" min="1" max="100000" default-value="3" :on-change="onChange"></ant-input-number>
        <ant-input-number min="1" max="100000" default-value="3" :on-change="onChange"></ant-input-number>
        <ant-input-number size="small" min="1" max="100000" default-value="3" :on-change="onChange"></ant-input-number>
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
