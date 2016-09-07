<template>
  <li class="ant-menu-item-group">
    <div class="ant-menu-item-group-title" v-if="title">{{ title }}</div>
    <ul class="ant-menu-item-group-list">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'ant-menu-item-group',
    props: {
      title: String
    }
  };
</script>
