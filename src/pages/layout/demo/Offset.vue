<template lang="html">
  <div>
    <code-box id="components-layout-demo-offset" title="左右偏移" :description="description" :code="code">
      <div slot="instance">
        <ant-row>
          <ant-col span="8">.ant-col-8</ant-col>
          <ant-col span="8" offset="8">.ant-col-8</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="6" offset="6">.ant-col-6 .ant-col-offset-6</ant-col>
          <ant-col span="6" offset="6">.ant-col-6 .ant-col-offset-6</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="12" offset="6">.ant-col-12 .ant-col-offset-6</ant-col>
        </ant-row>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './offset.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-row>
          <ant-col span="8">.ant-col-8</ant-col>
          <ant-col span="8" offset="8">.ant-col-8</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="6" offset="6">.ant-col-6 .ant-col-offset-6</ant-col>
          <ant-col span="6" offset="6">.ant-col-6 .ant-col-offset-6</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="12" offset="6">.ant-col-12 .ant-col-offset-6</ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>
