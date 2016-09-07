<template lang="html">
  <div>
    <code-box id="components-spin-demo-inside" title="容器" :code="code" :description="description">
      <div slot="instance">
        <div class="example">
          <ant-spin></ant-spin>
        </div>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './inside.md'

export default {
  data: () => ({
    description,
    code: `
      <template lang="html">
        <div>
          <div class="example">
            <ant-spin></ant-spin>
          </div>
        </div>
      </template>

      <style scoped>
      .example {
        text-align: center;
        background: rgba(0,0,0,0.05);
        border-radius: 4px;
        margin-bottom: 20px;
        padding: 30px 50px;
        margin: 20px 0;
      }
      </style>
    `
  })
}
</script>

<style scoped>
.example {
  text-align: center;
  background: rgba(0,0,0,0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
}
</style>
