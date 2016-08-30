<template>
  <div>
    <ant-button :on-click="success">测试</ant-button>
    <ant-modal :visible="visible"></ant-modal>
  </div>
</template>

<script>
  import { Modal } from '../src';
  export default {
    data() {
      return {
        visible: false
      };
    },
    methods: {
      success() {
        Modal.confirm();
      }
    }
  };
</script>
