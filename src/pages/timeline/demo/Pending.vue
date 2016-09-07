<template lang="html">
  <div>
    <code-box id="components-timeline-demo-pending" title="最后一个" :code="code" :description="description">
      <div slot="instance">
        <ant-timeline>
          <a slot="pending" href="#">查看更多</a>
          <ant-timeline-item>创建服务现场 2015-09-01</ant-timeline-item>
          <ant-timeline-item>初步排除网络异常 2015-09-01</ant-timeline-item>
          <ant-timeline-item>技术测试异常 2015-09-01</ant-timeline-item>
        </ant-timeline>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './pending.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-timeline>
          <a slot="pending" href="#">查看更多</a>
          <ant-timeline-item>创建服务现场 2015-09-01</ant-timeline-item>
          <ant-timeline-item>初步排除网络异常 2015-09-01</ant-timeline-item>
          <ant-timeline-item>技术测试异常 2015-09-01</ant-timeline-item>
        </ant-timeline>
      </div>
    `
  })
}
</script>
