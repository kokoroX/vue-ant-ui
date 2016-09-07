<template lang="html">
  <div>
    <code-box id="components-layout-demo-gutter" title="区块间隔" :code="code" :description="description">
      <div class="gutter-example" slot="instance">
        <ant-row :gutter="16">
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
        </ant-row>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './gutter.md'

export default {
  data: () => ({
    description,
    code: `
      <div class="gutter-example" slot="instance">
        <ant-row :gutter="16">
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
          <ant-col class="gutter-row" span="6">
            <div class="gutter-box">.ant-col-6</div>
          </ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>

<style>
.gutter-example .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #2db7f5;
  height: 80px;
  line-height: 80px;
  border-radius: 6px;
}
</style>
