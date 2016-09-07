<template lang="html">
  <div>
    <code-box id="components-input-demo-size" title="三种大小" :code="code" :description="description">
      <div class="example-input" slot="instance">
        <ant-input size="large" placeholder="大尺寸"></ant-input>
        <ant-input placeholder="默认尺寸"></ant-input>
        <ant-input size="small" placeholder="小尺寸"></ant-input>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './size.md'

export default {
  data: () => ({
    description,
    code: `
      <template lang="html">
        <div class="example-input">
          <ant-input size="large" placeholder="大尺寸"></ant-input>
          <ant-input placeholder="默认尺寸"></ant-input>
          <ant-input size="small" placeholder="小尺寸"></ant-input>
        </div>
      </template>
      <style>
      .example-input .ant-input {
        width: 200px;
        margin: 0 8px 8px 0;
      }
      </style>
    `
  })
}
</script>

<style>
.example-input .ant-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
</style>
