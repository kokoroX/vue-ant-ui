<template lang="html">
  <div role="tabpanel" class="ant-tabs-tabpane" v-show="isShow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ant-tabs-plane',
  props: {
    key: String
  },
  data: () => ({
    isShow: false
  }),
  events: {
    'CHANGE_ACTIVE' (value) {
      this.isShow = value === this.key
    }
  }
}
</script>
