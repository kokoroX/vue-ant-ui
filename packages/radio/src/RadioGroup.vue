<template lang="html">
  <div class="ant-radio-group" :class="{
      'ant-radio-group-large': size === 'large',
      'ant-radio-group-small': size === 'small'
    }">
    <slot></slot>
  </div>
</template>

<script>
  import { curryingContains } from '../../_utils';
  export default {
    name: 'radioGroup',

    props: {
      onChange: Function,
      value: [String, Number, Boolean],
      disabled: Boolean,
      size: {
        type: String,
        default: 'default',
        validator: curryingContains(['large', 'default', 'small'])
      }
    },
    compiled() {
      if (this.value != null) this.select(this.value);
      if (this.disabled) this.$broadcast('disabled');
    },
    watch: {
      value(value) {
        if (this.value != null) this.select(this.value);
        if (this.disabled) this.$broadcast('disabled');
      }
    },
    methods: {
      select(value) {
        this.value = value;
        this.$broadcast('selected', value);
        this.onChange && this.onChange(value);
      }
    },
    events: {
      'toggle-selected'(value) {
        this.select(value);
      }
    }
  };
</script>
