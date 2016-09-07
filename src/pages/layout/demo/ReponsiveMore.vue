<template lang="html">
  <div>
    <code-box id="components-layout-demo-reponsive" title="响应式布局" :description="description" :code="code">
      <div slot="instance">
        <ant-row>
          <ant-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"></ant-col>
          <ant-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"></ant-col>
          <ant-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"></ant-col>
        </ant-row>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './reponsive-more.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-row>
          <ant-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"></ant-col>
          <ant-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"></ant-col>
          <ant-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"></ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>
