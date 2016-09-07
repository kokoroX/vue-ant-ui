<template lang="html">
  <div>
    <code-box id="components-card-demo-basic" title="典型卡片" :code="code" :description="description">
      <div slot="instance">
        <ant-card style="width: 300;">
          <template slot="title">Card title</template>
          <a href="#" slot="extra">More</a>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </ant-card>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './basic.md'

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
    `
  })
}
</script>
