<template lang="html">
  <div>
    <code-box id="components-badge-demo-no-wrapper" title="独立使用" :code="code" :description="description">
      <div slot="instance">
        <ant-badge :count="25"></ant-badge>
        <ant-badge :count="4" :count-style="{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }"></ant-badge>
        <ant-badge :count="109" :count-style="{ backgroundColor: '#87d068' }"></ant-badge>
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
        <ant-badge :count="25"></ant-badge>
        <ant-badge :count="4" :count-style="{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }"></ant-badge>
        <ant-badge :count="109" :count-style="{ backgroundColor: '#87d068' }"></ant-badge>
      </div>
    `
  })
}
</script>
