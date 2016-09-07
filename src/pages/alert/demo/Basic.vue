<template lang="html">
  <div>
    <code-box id="components-alert-demo-basic" title="基本" :code="code" :description="description">
      <div slot="instance">
        <ant-alert message="成功提示的文案" type="success"></ant-alert>
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
        <ant-alert message="成功提示的文案" type="success"></ant-alert>
      </div>
    `
  })
}
</script>
