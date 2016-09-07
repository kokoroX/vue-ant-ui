<template lang="html">
  <div>
    <code-box id="components-affix-demo-basic" title="基本" :code="code" :description="description">
      <div slot="instance">
        <ant-affix>
          <ant-button type="primary">固定在顶部</ant-button>
        </ant-affix>
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
        <ant-affix>
          <ant-button type="primary">固定在顶部</ant-button>
        </ant-affix>
      </div>
    `
  })
}
</script>
