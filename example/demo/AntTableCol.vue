<template>
  <span>
    <slot></slot>
  </span>
</template>

<script>
  export default {
    props: {
      title: String,
      name: String
    }
  };
</script>
