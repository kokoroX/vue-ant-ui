<template lang="html">
  <div>
    <code-box id="components-switch-demo-text" title="文字和图标" :code="code" :description="description">
      <div slot="instance">
        <ant-switch checked-children="开" un-checked-children="关"></ant-switch>
        <ant-switch>
          <ant-icon type="check" slot="checkedChildren"></ant-icon>
          <ant-icon type="cross" slot="unCheckedChildren"></ant-icon>
        </ant-switch>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './text.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-switch checked-children="开" un-checked-children="关"></ant-switch>
        <ant-switch>
          <ant-icon type="check" slot="checkedChildren"></ant-icon>
          <ant-icon type="cross" slot="unCheckedChildren"></ant-icon>
        </ant-switch>
      </div>
    `
  })
}
</script>
