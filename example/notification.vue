<template lang="html">
  <div>
    <ant-button type="primary" :on-click="openNotification">打开通知提醒框</ant-button>

    <ant-button type="primary" :on-click="openCustomNotification">打开不自动关闭的提醒框</ant-button>

    <ant-button :on-click="openNotificationWithIcon('success')">成功</ant-button>
    <ant-button :on-click="openNotificationWithIcon('info')">消息</ant-button>
    <ant-button :on-click="openNotificationWithIcon('warning')">警告</ant-button>
    <ant-button :on-click="openNotificationWithIcon('error')">错误</ant-button>
  </div>
</template>

<script>
import { Notification } from 'src';
export default {
  methods: {
    openNotification() {
      Notification.open({
        message: '这是标题',
        description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案'
      });
    },
    openCustomNotification() {
      Notification.open({
        message: '这是标题',
        description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案',
        duration: 0
      });
    },
    openNotificationWithIcon(type) {
      return function() {
        Notification[type]({
          message: '这是标题',
          description: '这是提示框的文案这是提示框示框的文案这是提示是提示框的文案这是提示框的文案'
        });
      };
    }
  }
};
</script>
