<template>
  <h1>vue-ant-ui</h1>
  <p>Ant Design components for Vue</p>
  <pagination :current="1" :total="100" prefix-cls="ant-pagination"></pagination>
</template>

<script>
  import '../packages/style';
  import '../packages/pagination/style';
  import Pagination from 'vue-core-pagination';

  export default {
    name: 'app',
    components: {
      Pagination
    }
  };
</script>
