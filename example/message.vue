<template lang="html">
  <div>
    <ant-button type="primary" :on-click="info">显示普通提醒</ant-button>

    <ant-button :on-click="success">显示成功提示</ant-button>
    <ant-button :on-click="error">显示报错提示</ant-button>
    <ant-button :on-click="warning">显示警告提示</ant-button>

    <ant-button :on-click="successWithTime">自定义时长提示</ant-button>

    <ant-button :on-click="loading">显示加载中...</ant-button>
  </div>
</template>

<script>
import { Message } from 'src';
export default {
  methods: {
    info() {
      Message.info('这是一条普通的提醒');
    },
    success() {
      Message.success('这是一条成功提示');
    },
    error() {
      Message.error('这是一条报错提示');
    },
    warning() {
      Message.warning('这是一条警告提示');
    },
    successWithTime() {
      Message.success('这是一条成功的提示,并将于10秒后消失', 10);
    },
    loading() {
      const hide = Message.success('正在执行中...', 0);
      console.log(hide);
      setTimeout(() => {
        hide();
        Message.destory();
      }, 2500);
    }
  },
  ready() {
    Message.config({
      top: 100,
      duration: 5
    });
  }
};
</script>
