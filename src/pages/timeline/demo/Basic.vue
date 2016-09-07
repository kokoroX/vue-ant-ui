<template lang="html">
  <div>
    <code-box id="components-timeline-demo-basic" title="基本用法" :code="code" :description="description">
      <div slot="instance">
        <ant-timeline>
          <ant-timeline-item>创建服务现场 2015-09-01</ant-timeline-item>
          <ant-timeline-item>初步排除网络异常 2015-09-01</ant-timeline-item>
          <ant-timeline-item>技术测试异常 2015-09-01</ant-timeline-item>
          <ant-timeline-item>网络异常正在修复 2015-09-01</ant-timeline-item>
        </ant-timeline>
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
        <ant-timeline>
          <ant-timeline-item>创建服务现场 2015-09-01</ant-timeline-item>
          <ant-timeline-item>初步排除网络异常 2015-09-01</ant-timeline-item>
          <ant-timeline-item>技术测试异常 2015-09-01</ant-timeline-item>
          <ant-timeline-item>网络异常正在修复 2015-09-01</ant-timeline-item>
        </ant-timeline>
      </div>
    `
  })
}
</script>
