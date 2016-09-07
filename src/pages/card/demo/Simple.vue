<template lang="html">
  <div>
    <code-box id="components-card-demo-simple" title="简洁卡片" :code="code" :description="description">
      <div slot="instance">
        <ant-card style="width: 300px;">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </ant-card>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './simple.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-card style="width: 300;">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </ant-card>
      </div>
    `
  })
}
</script>
