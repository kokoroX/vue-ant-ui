<template lang="html">
  <div>
    <code-box id="components-layout-demo-reponsive" title="响应式布局" :description="description" :code="code">
      <div slot="instance">
        <ant-row>
          <ant-col xs="2" sm="4" md="6" lg="8"></ant-col>
          <ant-col xs="20" sm="16" md="12" lg="8"></ant-col>
          <ant-col xs="2" sm="4" md="6" lg="8"></ant-col>
        </ant-row>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './reponsive.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-row>
          <ant-col xs="2" sm="4" md="6" lg="8"></ant-col>
          <ant-col xs="20" sm="16" md="12" lg="8"></ant-col>
          <ant-col xs="2" sm="4" md="6" lg="8"></ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>
