<template lang="html">
  <div>
    <code-box id="components-pagination-demo-more" title="更多" :code="code" :description="description">
      <div slot="instance">
        <ant-pagination :default-current="1" :total="500"></ant-pagination>
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
        <ant-pagination :default-current="1" :total="500"></ant-pagination>
      </div>
    `
  })
}
</script>
