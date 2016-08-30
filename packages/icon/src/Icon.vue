<template>
  <i class="anticon" :class="{[`anticon-${type}`]: type}"></i>
</template>

<script>
  export default {
    name: 'ant-icon',
    props: {
      type: {
        type: String
      }
    }
  };
</script>
