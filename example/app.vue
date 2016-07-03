<template>
  <h1>vue-ant-ui</h1>
  <p>Ant Design components for Vue</p>
  <form action="">
    <button-group>
       <ant-button>Cancel</ant-button>
       <ant-button type="primary">OK</ant-button>
     </button-group>
     <button-group>
       <ant-button disabled>L</ant-button>
       <ant-button disabled>M</ant-button>
       <ant-button disabled>R</ant-button>
     </button-group>
     <button-group>
       <ant-button type="primary">L</ant-button>
       <ant-button>M</ant-button>
       <ant-button type="ghost">M</ant-button>
       <ant-button type="dashed">R</ant-button>
     </button-group>

     <h4>With Icon</h4>
     <button-group>
       <ant-button type="primary">
         <icon type="left"></icon>Go back
       </ant-button>
       <ant-button type="primary">
         Go forward<icon type="right"></icon>
       </ant-button>
     </button-group>
     <button-group>
       <ant-button type="primary" icon="cloud"></ant-button>
       <ant-button type="primary" icon="cloud-download"></ant-button>
     </button-group>

     <h4>Size</h4>
     <button-group size="large">
       <ant-button type="ghost">Large</ant-button>
       <ant-button type="ghost">Large</ant-button>
     </button-group>
     <button-group>
       <ant-button type="ghost">Default</ant-button>
       <ant-button type="ghost">Default</ant-button>
     </button-group>
     <button-group size="small">
       <ant-button type="ghost">Small</ant-button>
       <ant-button type="ghost">Small</ant-button>
     </button-group>
  </form>
  <!-- <pagination :current="1" :total="100" prefix-cls="ant-pagination"></pagination> -->
</template>

<script>
  import '../packages/style';
  import '../packages/button/style';
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
