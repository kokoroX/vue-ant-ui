<template lang="html">
  <div>
    <ant-alert message="消息提示的文案" type="info" close-text="不再提醒"></ant-alert>
  </div>
</template>

<script>
export default {
  methods: {
    onClose() {
      console.log('要被关闭了');
    }
  }
};
</script>
