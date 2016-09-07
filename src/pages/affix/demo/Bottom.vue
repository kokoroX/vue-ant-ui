<template lang="html">
  <div>
    <code-box id="components-affix-demo-bottom" title="下方固定" :code="code" :description="description">
      <div slot="instance">
        <ant-affix :offset-bottom="20">
          <ant-button type="primary">固定在距离底部 20px 的位置</ant-button>
        </ant-affix>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './bottom.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-affix :offset-bottom="20">
          <ant-button type="primary">固定在距离底部 20px 的位置</ant-button>
        </ant-affix>
      </div>
    `
  })
}
</script>
