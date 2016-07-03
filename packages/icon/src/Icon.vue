<template>
  <i class="anticon" :class="{[`anticon-${type}`]: type}"></i>
</template>

<script>
  export default {
    name: 'icon',
    props: {
      type: {
        type: String
      }
    }
  };
</script>
