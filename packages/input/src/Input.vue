<template lang="html">
  <span class="ant-input-wrapper" :class="{ 'ant-input-group': _slotContents }">
    <!-- 前缀 -->
    <span class="ant-input-group-addon" v-if="_slotContents && _slotContents.addonBefore">
      <slot name="addonBefore"></slot>
    </span>

    <template v-if="type === 'textarea'">
      <textarea class="ant-input"
        :rows="rows"
        :id="id"
        :class="classes"
        :disabled="disabled"
        :placeholder="placeholder"
        v-model="value"
        @keyup="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"></textarea>
    </template>

    <template v-else>
      <input :type="type" class="ant-input"
        :id="id"
        :class="classes"
        :disabled="disabled"
        :placeholder="placeholder"
        v-model="value"
        @keyup="handleChange"
        @focus="handleFocus"
        @blur="handleBlur">
    </template>
    <!-- 后缀 -->
    <span class="ant-input-group-addon" v-if="_slotContents && _slotContents.addonAfter">
      <slot name="addonAfter"></slot>
    </span>
  </span>
</template>

<script>
  import { curryingContains } from '_utils';
  export default {
    name: 'ant-input',
    props: {
      rows: {
        type: Number,
        default: 4
      },
      type: {
        type: String,
        default: 'text'
      },
      id: [Number, String],
      value: true,
      size: {
        type: String,
        default: 'default',
        validator: curryingContains(['large', 'default', 'small'])
      },
      disabled: {
        type: Boolean,
        default: false
      },
      onPressEnter: Function,
      onChange: Function,
      onFocus: Function,
      onBlur: Function,
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      placeholder: [String, Number, Boolean]
    },
    computed: {
      classes() {
        const { size } = this;
        return {
          'ant-input-lg': size === 'large',
          'ant-input-sm': size === 'small'
        };
      }
    },
    methods: {
      handleChange(e) {
        if (this.disabled) return false;
        if (e.keyCode === 13) {
          this.onPressEnter && this.onPressEnter(e);
          return false;
        }
        this.onChange && this.onChange(e);
      },
      handleFocus(e) {
        if (this.disabled) return false;
        this.onFocus && this.onFocus(e);
      },
      handleBlur(e) {
        if (this.disabled) return false;
        this.onBlur && this.onBlur(e);
      }
    }
  };
</script>
