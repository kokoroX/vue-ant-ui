<template lang="html">
  <div>
    <code-box id="components-pagination-demo-basic" title="基本" :code="code" :description="description">
      <div slot="instance">
        <ant-pagination :default-current="1" :total="50"></ant-pagination>
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
        <ant-pagination :default-current="1" :total="50"></ant-pagination>
      </div>
    `
  })
}
</script>
