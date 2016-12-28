<template lang="html">
  <div class="ant-collapse-item" @click="select">
    <div class="ant-collapse-header" role="tab" :aria-expanded="`${selected}`">
      <i class="arrow"></i>
      <slot name="header">{{header}}</slot>
    </div>
    <div class="ant-collapse-content" :class="classes" role="tabpanel">
      <div class="ant-collapse-content-box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import { contains } from '../../_utils';
  export default {
    name: 'ant-collapse-panel',
    props: {
      key: String,
      header: String
    },
    data() {
      return {
        selected: false
      };
    },
    computed: {
      classes() {
        const { selected } = this;
        return {
          'ant-collapse-content-active': selected,
          'ant-collapse-content-inactive': !selected
        };
      }
    },
    methods: {
      select() {
        this.$dispatch('toggle-selected', this.key);
      }
    },
    events: {
      'selected'(arr) {
        this.selected = contains(arr, this.key);
      }
    }
  };
</script>
