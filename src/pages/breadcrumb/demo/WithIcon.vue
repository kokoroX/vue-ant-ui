<template lang="html">
  <div>
    <code-box id="components-breadcrumb-demo-with-icon" title="带有图标的" :code="code" :description="description">
      <div slot="instance">
        <ant-breadcrumb>
          <ant-breadcrumb-item href="">
            <ant-icon type="home"></ant-icon>
          </ant-breadcrumb-item>
          <ant-breadcrumb-item href="">
            <ant-icon type="user"></ant-icon>
            <span>Application List</span>
          </ant-breadcrumb-item>
          <ant-breadcrumb-item>
            Application
          </ant-breadcrumb-item>
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
          <ant-breadcrumb-item href="">
            <ant-icon type="home"></ant-icon>
          </ant-breadcrumb-item>
          <ant-breadcrumb-item href="">
            <ant-icon type="user"></ant-icon>
            <span>Application List</span>
          </ant-breadcrumb-item>
          <ant-breadcrumb-item>
            Application
          </ant-breadcrumb-item>
        </ant-breadcrumb>
      </div>
    `
  })
}
</script>
