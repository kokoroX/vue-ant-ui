<template lang="html">
  <div>
    <code-box id="components-timeline-demo-color" title="圆圈颜色" :code="code" :description="description">
      <div slot="instance">
        <ant-timeline>
          <ant-timeline-item color="green">创建服务现场 2015-09-01</ant-timeline-item>
          <ant-timeline-item color="green">创建服务现场 2015-09-01</ant-timeline-item>
          <ant-timeline-item color="red">
            <p>初步排除网络异常1</p>
            <p>初步排除网络异常2</p>
            <p>初步排除网络异常3 2015-09-01</p>
          </ant-timeline-item>
          <ant-timeline-item>
            <p>技术测试异常1</p>
            <p>技术测试异常2</p>
            <p>技术测试异常3 2015-09-01</p>
          </ant-timeline-item>
        </ant-timeline>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './color.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-timeline>
          <ant-timeline-item color="green">创建服务现场 2015-09-01</ant-timeline-item>
          <ant-timeline-item color="green">创建服务现场 2015-09-01</ant-timeline-item>
          <ant-timeline-item color="red">
            <p>初步排除网络异常1</p>
            <p>初步排除网络异常2</p>
            <p>初步排除网络异常3 2015-09-01</p>
          </ant-timeline-item>
          <ant-timeline-item>
            <p>技术测试异常1</p>
            <p>技术测试异常2</p>
            <p>技术测试异常3 2015-09-01</p>
          </ant-timeline-item>
        </ant-timeline>
      </div>
    `
  })
}
</script>
