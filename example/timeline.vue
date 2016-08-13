<template lang="html">
  <div>
    <ant-timeline>
      <ant-timeline-item>创建服务现场 2015-09-01</ant-timeline-item>
      <ant-timeline-item>初步排除网络异常 2015-09-01</ant-timeline-item>
      <ant-timeline-item>技术测试异常 2015-09-01</ant-timeline-item>
      <ant-timeline-item>网络异常正在修复 2015-09-01</ant-timeline-item>
    </ant-timeline>

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

    <ant-timeline>
      <a slot="pending" href="#">查看更多</a>
      <ant-timeline-item>创建服务现场 2015-09-01</ant-timeline-item>
      <ant-timeline-item>初步排除网络异常 2015-09-01</ant-timeline-item>
      <ant-timeline-item>技术测试异常 2015-09-01</ant-timeline-item>
    </ant-timeline>

    <ant-timeline>
      <ant-timeline-item>创建服务现场 2015-09-01</ant-timeline-item>
      <ant-timeline-item>初步排除网络异常 2015-09-01</ant-timeline-item>
      <ant-timeline-item color="red">
        <ant-icon type="clock-circle-o" style="font-size: 16px;" slot="dot"></ant-icon>
        技术测试异常 2015-09-01
      </ant-timeline-item>
      <ant-timeline-item>网络异常正在修复 2015-09-01</ant-timeline-item>
    </ant-timeline>
  </div>
</template>

<script>
export default {};
</script>
