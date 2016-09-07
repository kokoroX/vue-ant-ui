<template lang="html">
  <div>
    <code-box id="components-badge-demo-plus" title="大数字" :code="code" :description="description">
      <div slot="instance">
        <ant-badge :count="99">
          <a href="#" class="head-example"></a>
        </ant-badge>
        <ant-badge :count="200">
          <a href="#" class="head-example"></a>
        </ant-badge>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './99plus.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-badge :count="99">
          <a href="#" class="head-example"></a>
        </ant-badge>
        <ant-badge :count="200">
          <a href="#" class="head-example"></a>
        </ant-badge>
      </div>
    `
  })
}
</script>
