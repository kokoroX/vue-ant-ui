<template lang="html">
  <div>
    <code-box id="components-badge-demo-overflow" title="封顶数字" :code="code" :description="description">
      <div slot="instance">
        <ant-badge :count="99" :overflow-count="10">
          <a href="#" class="head-example"></a>
        </ant-badge>
        <ant-badge :count="1000" :overflow-count="999">
          <a href="#" class="head-example"></a>
        </ant-badge>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './overflow.md'

export default {
  data: () => ({
    description,
    code: `
      <template lang="html">
        <div>
          <ant-badge :count="5">
            <a href="#" class="head-example"></a>
          </ant-badge>
        </div>
      </template>

      <style>
      .ant-badge {
        margin-right: 16px;
      }
      .head-example {
        width: 42px;
        height: 42px;
        border-radius: 6px;
        background: #eee;
        display: inline-block;
      }
      .ant-badge p {
        margin: 0;
      }
      </style>
    `
  })
}
</script>
