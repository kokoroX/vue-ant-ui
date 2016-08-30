<template lang="html">
  <form class="ant-form" :class="classes" @submit.prevent="handleSubmit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'ant-form',
  props: {
    inline: Boolean,
    horizontal: Boolean,
    onSubmit: Function
  },
  computed: {
    classes() {
      const { inline, horizontal } = this;
      return {
        'ant-form-inline': inline,
        'ant-form-horizontal': horizontal
      };
    }
  },
  methods: {
    handleSubmit(e) {
      this.onSubmit && this.onSubmit(e);
    }
  }
};
</script>
