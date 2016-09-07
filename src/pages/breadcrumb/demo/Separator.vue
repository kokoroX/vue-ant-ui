<template lang="html">
  <div>
    <code-box id="components-breadcrumb-demo-separator" title="分隔符" :code="code" :description="description">
      <div slot="instance">
        <ant-breadcrumb separator=">">
          <ant-breadcrumb-item>Home</ant-breadcrumb-item>
          <ant-breadcrumb-item href="">Application Center</ant-breadcrumb-item>
          <ant-breadcrumb-item href="">Application List</ant-breadcrumb-item>
          <ant-breadcrumb-item>An Application</ant-breadcrumb-item>
        </ant-breadcrumb>
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
        <ant-breadcrumb>
          <ant-breadcrumb-item>Home</ant-breadcrumb-item>
          <ant-breadcrumb-item><a href="">Application Center</a></ant-breadcrumb-item>
          <ant-breadcrumb-item><a href="">Application List</a></ant-breadcrumb-item>
          <ant-breadcrumb-item>An Application</ant-breadcrumb-item>
        </ant-breadcrumb>
      </div>
    `
  })
}
</script>
