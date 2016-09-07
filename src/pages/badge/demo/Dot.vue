<template lang="html">
  <div>
    <code-box id="components-badge-demo-dot" title="讨嫌的小红点" :code="code" :description="description">
      <div slot="instance">
        <ant-badge dot>
          <ant-icon type="notification"></ant-icon>
        </ant-badge>
        <ant-badge dot>
          <a href="#">一个链接</a>
        </ant-badge>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './dot.md'

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
