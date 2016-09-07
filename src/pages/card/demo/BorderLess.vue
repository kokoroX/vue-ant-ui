<template lang="html">
  <div>
    <code-box id="components-card-demo-basic" title="无边框" :code="code" :description="description">
      <div slot="instance">
        <div style="background: #ECECEC; padding: 30px;">
          <ant-card :bordered="false"  style="width: 300;">
            <template slot="title">Card title</template>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </ant-card>
        </div>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './border-less.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <div style="background: #ECECEC; padding: 30px;">
          <ant-card :bordered="false"  style="width: 300;">
            <template slot="title">Card title</template>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </ant-card>
        </div>
      </div>
    `
  })
}
</script>
