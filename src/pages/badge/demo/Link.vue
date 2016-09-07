<template lang="html">
  <div>
    <code-box id="components-badge-demo-basic" title="可点击" :code="code" :description="description">
      <div slot="instance">
        <a target="_blank" href="#">
          <ant-badge :count="5">
            <span class="head-example"></span>
          </ant-badge>
        </a>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './link.md'

export default {
  data: () => ({
    description,
    code: `
      <template lang="html">
        <div>
          <a target="_blank" href="#">
            <ant-badge :count="5">
              <span class="head-example"></span>
            </ant-badge>
          </a>
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
