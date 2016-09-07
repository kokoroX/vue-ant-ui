<template lang="html">
  <span>
    <a class="ant-breadcrumb-link" :href="href" v-if="typeof href === 'string'">
      <slot></slot>
    </a>
    <span class="ant-breadcrumb-link" v-else>
      <slot></slot>
    </span>
    <span class="ant-breadcrumb-separator">{{$parent.separator}}</span>
  </span>
</template>

<script>
export default {
  name: 'ant-breadcrumb-item',
  props: {
    href: String
  }
};
</script>
