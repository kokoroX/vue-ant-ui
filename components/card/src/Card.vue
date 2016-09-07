<template lang="html">
  <div class="ant-card" :class="{'ant-card-bordered': bordered, 'ant-card-loading': loading}">
    <div class="ant-card-head" v-if="_slotContents.title">
      <h3 class="ant-card-head-title">
        <slot name="title"></slot>
      </h3>
    </div>
    <div class="ant-card-extra">
      <slot name="extra"></slot>
    </div>
    <div class="ant-card-body" :style="bodyStyle">
      <template v-if="loading">
        <div>
          <p>████████████████████████</p>
          <p>██████　███████████████████</p>
          <p>██████████████　██████████</p>
          <p>█████　██████　█████████████</p>
          <p>███████████　██████████　███</p>
        </div>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ant-card',
  props: {
    bordered: {
      type: Boolean,
      default: true
    },
    bodyStyle: Object,
    loading: Boolean
  }
};
</script>
