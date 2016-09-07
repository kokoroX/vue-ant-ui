<template lang="html">
  <div>
    <code-box id="components-layout-demo-sort" title="布局排序" :description="description" :code="code">
      <div slot="instance">
        <ant-row>
          <ant-col span="18" push="6">.ant-col-18 .ant-col-push-6</ant-col>
          <ant-col span="6" pull="18">.ant-col-6 .ant-col-pull-18</ant-col>
        </ant-row>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './sort.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-row>
          <ant-col span="18" push="6">.ant-col-18 .ant-col-push-6</ant-col>
          <ant-col span="6" pull="18">.ant-col-6 .ant-col-pull-18</ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>
