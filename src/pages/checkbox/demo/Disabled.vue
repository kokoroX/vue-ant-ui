<template lang="html">
  <div>
    <code-box id="components-checkbox-demo-disabled" title="不可用" :code="code" :description="description">
      <div slot="instance">
        <ant-checkbox :default-checked="false" disabled></ant-checkbox>
        <br />
        <ant-checkbox default-checked disabled></ant-checkbox>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './disabled.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-checkbox :default-checked="false" disabled></ant-checkbox>
        <br />
        <ant-checkbox default-checked disabled></ant-checkbox>
      </div>
    `
  })
}
</script>
