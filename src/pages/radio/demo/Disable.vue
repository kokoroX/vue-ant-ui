<template lang="html">
  <div>
    <code-box id="components-radio-demo-disabled" title="不可用" :code="code" :description="description">
      <div slot="instance">
        <ant-radio :default-checked="false" :disabled="disabled">不可用</ant-radio>
        <br />
        <ant-radio default-checked :disabled="disabled">不可用</ant-radio>
        <div style="margin-top: 20px;">
          <ant-button type="primary" :on-click="toggleDisabled">
            Toggle disabled
          </ant-button>
        </div>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './disable.md'

export default {
  data: () => ({
    disabled: true,
    description,
    code: `
      <template lang="html">
        <div>
          <ant-radio :default-checked="false" :disabled="disabled">不可用</ant-radio>
          <br />
          <ant-radio default-checked :disabled="disabled">不可用</ant-radio>
          <div style="margin-top: 20px;">
            <ant-button type="primary" :on-click="toggleDisabled">
              Toggle disabled
            </ant-button>
          </div>
        </div>
      </template>

      \<script\>
      export default {
        data: () => ({
          disabled: true
        }),
        methods: {
          toggleDisabled () {
            this.disabled = !this.disabled
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    toggleDisabled () {
      this.disabled = !this.disabled
    }
  }
}
</script>
