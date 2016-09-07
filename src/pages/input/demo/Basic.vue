<template lang="html">
  <div>
    <code-box id="components-input-demo-basic" title="基本使用" :code="code" :description="description">
      <div slot="instance">
        <ant-input placeholder="基本使用"></ant-input>
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
        <ant-input placeholder="基本使用"></ant-input>
      </div>
    `
  })
}
</script>
