<template lang="html">
  <div>
    <code-box id="components-input-number-demo-disabled" title="基本" :code="code" :description="description">
      <div slot="instance">
        <ant-input-number min="1" max="10" :disabled="disabled" default-value="3"></ant-input-number>
        <div style="margin-top: 20px;">
          <ant-button :on-click="toggle" type="primary">Toggle disabled</ant-button>
        </div>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './basic.md'

export default {
  data: () => ({
    disabled: true,
    description,
    code: `
      <template lang="html">
        <div>
          <ant-input-number min="1" max="10" :disabled="disabled" default-value="3"></ant-input-number>
          <div style="margin-top: 20px;">
            <ant-button :on-click="toggle" type="primary">Toggle disabled</ant-button>
          </div>
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
    `
  }),
  methods: {
    toggle () {
      this.disabled = !this.disabled
    }
  }
}
</script>
