<template lang="html">
  <div>
    <code-box id="components-card-demo-basic" title="栅格卡片" :code="code" :description="description">
      <div slot="instance">
        <div style="background: #ECECEC; padding: 30px;">
          <ant-row>
            <ant-col span="8">
              <ant-card :bordered="false">
                <template slot="title">Card title</template>
                Card content
              </ant-card>
            </ant-col>
            <ant-col span="8">
              <ant-card :bordered="false">
                <template slot="title">Card title</template>
                Card content
              </ant-card>
            </ant-col>
            <ant-col span="8">
              <ant-card :bordered="false">
                <template slot="title">Card title</template>
                Card content
              </ant-card>
            </ant-col>
          </ant-row>
        </div>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './grid.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-card style="width: 300;">
          <template slot="title">Card title</template>
          <a href="#" slot="extra">More</a>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </ant-card>
      </div>

      <style scoped>
      .code-box-demo .ant-row {
        margin-left: -8px;
        margin-right: -8px;
      }
      .code-box-demo .ant-row > div {
        padding: 0 8px;
      }
      </style>
    `
  })
}
</script>

<style scoped>
.code-box-demo .ant-row {
  margin-left: -8px;
  margin-right: -8px;
}
.code-box-demo .ant-row > div {
  padding: 0 8px;
}
</style>
