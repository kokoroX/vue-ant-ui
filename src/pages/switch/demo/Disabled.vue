<template lang="html">
  <div>
    <code-box id="components-switch-demo-disabled" title="不可用" :code="code" :description="description">
      <div slot="instance">
        <ant-switch :disabled="disabled"></ant-switch>
        <ant-button type="primary" :on-click="toggle">Toggle disabled</ant-button>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './disabled.md'

export default {
  data: () => ({
    disabled: true,
    description,
    code: `
      <template lang="html">
        <div>
          <ant-switch :disabled="disabled"></ant-switch>
          <ant-button type="primary" :on-click="toggle">Toggle disabled</ant-button>
        </div>
      </template>

      \<script\>
      export default {
        data: () => ({
          disabled: true
        }),
        methods: {
          toggle () {
            this.disabled = !this.disabled
          }
        }
      }
      \</script\>

      <style scoped>
      .ant-switch {
        display: block;
        margin-bottom: 8px;
      }
      </style>
    `
  }),
  methods: {
    toggle () {
      this.disabled = !this.disabled
    }
  }
}
</script>
