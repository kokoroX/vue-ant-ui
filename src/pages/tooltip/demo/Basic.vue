<template lang="html">
  <div>
    <code-box id="components-tooltip-demo-basic" title="基本" :code="code" :description="description">
      <div slot="instance">
        <ant-tooltip title="提示文字">
          <span>鼠标移上来就会出现提示</span>
        </ant-tooltip>
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
        <ant-tooltip title="提示文字">
          <span>鼠标移上来就会出现提示</span>
        </ant-tooltip>
      </div>
    `
  })
}
</script>
