<template lang="html">
  <div>
    123
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'test',
  ready() {
    console.log(this)
  }
};
</script>
