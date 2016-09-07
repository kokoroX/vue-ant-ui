<template lang="html">
  <div>
    <code-box id="components-layout-demo-flex-align" title="Flex 对齐" :code="code" :description="description">
      <div slot="instance">
        <p>顶部对齐</p>
        <ant-row type="flex" justify="center" align="top">
          <ant-col span="4"><p style="height: 100px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 50px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 120px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 80px;">.ant-ant-col-4</p></ant-col>
        </ant-row>

        <p>居中对齐</p>
        <ant-row type="flex" justify="space-around" align="middle">
          <ant-col span="4"><p style="height: 100px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 50px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 120px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 80px;">.ant-ant-col-4</p></ant-col>
        </ant-row>

        <p>底部对齐</p>
        <ant-row type="flex" justify="space-between" align="bottom">
          <ant-col span="4"><p style="height: 100px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 50px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 120px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 80px;">.ant-ant-col-4</p></ant-col>
        </ant-row>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './flex-align.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <p>顶部对齐</p>
        <ant-row type="flex" justify="center" align="top">
          <ant-col span="4"><p style="height: 100px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 50px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 120px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 80px;">.ant-ant-col-4</p></ant-col>
        </ant-row>

        <p>居中对齐</p>
        <ant-row type="flex" justify="space-around" align="middle">
          <ant-col span="4"><p style="height: 100px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 50px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 120px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 80px;">.ant-ant-col-4</p></ant-col>
        </ant-row>

        <p>底部对齐</p>
        <ant-row type="flex" justify="space-between" align="bottom">
          <ant-col span="4"><p style="height: 100px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 50px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 120px;">.ant-ant-col-4</p></ant-col>
          <ant-col span="4"><p style="height: 80px;">.ant-ant-col-4</p></ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>
