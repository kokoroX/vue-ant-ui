<template lang="html">
  <div class="ant-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ant-breadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  }
};
</script>
