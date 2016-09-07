<template lang="html">
  <div>
    <code-box id="components-rate-demo-text" title="文案展现" :code="code" :description="description">
      <div slot="instance">
        <span>
          <ant-rate allow-half :value="value" :on-change="handleChange"></ant-rate>
          <span class="ant-rate-text">{{value}} 星</span>
        </span>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './basic.md'

export default {
  data: () => ({
    value: 3,
    description,
    code: `
      <div>
        <ant-rate></ant-rate>
      </div>
    `
  }),
  methods: {
    handleChange (value) {
      this.value = value
    }
  }
}
</script>
