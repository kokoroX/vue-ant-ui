<template lang="html">
  <div class="ant-radio-group" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  import { curryingContains } from '../../_utils';
  export default {
    name: 'ant-radio-group',

    props: {
      onChange: Function,
      value: [String, Number, Boolean],
      disabled: Boolean,
      defaultValue: [String, Number, Boolean],
      size: {
        type: String,
        default: 'default',
        validator: curryingContains(['large', 'default', 'small'])
      }
    },
    compiled() {
      if (this.disabled) this.$broadcast('disabled');
      if (this.value !== undefined) {
        this.select(this.value)
        return
      }
      if (this.defaultValue !== undefined) {
        this.select(this.defaultValue)
        return
      }
    },
    watch: {
      value(value) {
        if (value != null) this.select(value);
      },
      disabled(value) {
        if (value) this.$broadcast('disabled');
      }
    },
    computed: {
      classes () {
        const { size } = this

        return {
          'ant-radio-group-large': size === 'large',
          'ant-radio-group-small': size === 'small'
        }
      }
    },
    methods: {
      select(value) {
        this.value = value;
        this.$broadcast('selected', value);
      }
    },
    events: {
      'toggle-selected'(e) {
        this.value = e.target._value;
        this.onChange && this.onChange(e);
      }
    }
  };
</script>

<style>
.ant-radio-group {
  font-size: 0;
}
</style>
