<template lang="html">
  <div class="ant-checkbox-group">
    <checkbox class="ant-checkbox-group-item" v-for="option in options"
      :disabled="typeof option.disabled === 'boolean' ? option.disabled : disabled"
      :checked="value.indexOf(option.value) !== -1"
      :on-change="() => { toggleOption(option) }"> {{option.label}} </checkbox>
  </div>
</template>

<script>
  import Checkbox from './Checkbox'

  export default {
    name: 'ant-checkbox-group',
    components: {
      Checkbox
    },
    props: {
      defaultValue: {
        type: Array,
        default: () => []
      },
      value: {
        type: Array,
        default: () => []
      },
      options: {
        type: Array,
        default: () => [],
        coerce(options) {
          return options.map(option => {
            if (typeof option === 'string') {
              return {
                label: option,
                value: option
              };
            }
            return option;
          });
        }
      },
      disabled: Boolean,
      onChange: Function
    },
    methods: {
      toggleOption(option) {
        const value = this.value;
        const optionIndex = value.indexOf(option.value);
        if (optionIndex === -1) {
          value.push(option.value);
        } else {
          value.splice(optionIndex, 1);
        }
        this.onChange && this.onChange(value);
      }
    },
    ready () {
      if (!this.value.length) this.value = this.defaultValue
    }
  };
</script>
