<template>
  <div class="app">
    <div class="example">
      <spin size="small">
        <div slot="demo">222</div>
        <div data-show="true" class="ant-alert ant-alert-info ant-alert-with-description ant-alert-no-icon"><span class="ant-alert-message">消息提示的文案</span><span class="ant-alert-description">消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍</span></div>
      </spin>
    </div>
  </div>
</template>

<script>
  import '../packages/style';
  import '../packages/spin/style';
  // import '../packages/button/style';
  // import Pagination from 'vue-core-pagination';

  export default {
    name: 'app',
    components: {},
    data() {
      return {
        loading: false
      };
    },
    methods: {
      enterIconLoading() {
        this.loading = true;
      }
    }
  };
</script>

<style></style>
