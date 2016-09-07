<template lang="html">
  <div>
    <code-box id="components-layout-demo-basic" title="基础布局" :code="code" :description="description">
      <div slot="instance">
        <ant-row>
          <ant-col span="12">.ant-col-12</ant-col>
          <ant-col span="12">.ant-col-12</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="8">.ant-col-8</ant-col>
          <ant-col span="8">.ant-col-8</ant-col>
          <ant-col span="8">.ant-col-8</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="6">.ant-col-6</ant-col>
          <ant-col span="6">.ant-col-6</ant-col>
          <ant-col span="6">.ant-col-6</ant-col>
          <ant-col span="6">.ant-col-6</ant-col>
        </ant-row>
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
        <ant-row>
          <ant-col span="12">.ant-col-12</ant-col>
          <ant-col span="12">.ant-col-12</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="8">.ant-col-8</ant-col>
          <ant-col span="8">.ant-col-8</ant-col>
          <ant-col span="8">.ant-col-8</ant-col>
        </ant-row>
        <ant-row>
          <ant-col span="6">.ant-col-6</ant-col>
          <ant-col span="6">.ant-col-6</ant-col>
          <ant-col span="6">.ant-col-6</ant-col>
          <ant-col span="6">.ant-col-6</ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>
