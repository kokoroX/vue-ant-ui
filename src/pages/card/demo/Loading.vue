<template lang="html">
  <div>
    <code-box id="components-card-demo-loading" title="预加载的卡片" :code="code" :description="description">
      <div slot="instance">
        <ant-card loading style="width: 34%;">
          <template slot="title">Card title</template>
          Whatever content
        </ant-card>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './loading.md'

export default {
  data: () => ({
    description,
    code: `
      <ant-card loading style="width: 34%;">
        <template slot="title">Card title</template>
        Whatever content
      </ant-card>

      <style>
      .ant-card-loading .ant-card-body p {
          word-break: break-all;
          line-height: 10px;
          margin: 5px 0 0;
          height: 10px;
          border-radius: 6px;
          overflow: hidden;
          display: inline-block;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          color: #f3f5f8;
      }
      </style>
    `
  })
}
</script>

<style>
.ant-card-loading .ant-card-body p {
    word-break: break-all;
    line-height: 10px;
    margin: 5px 0 0;
    height: 10px;
    border-radius: 6px;
    overflow: hidden;
    display: inline-block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #f3f5f8;
}
</style>
