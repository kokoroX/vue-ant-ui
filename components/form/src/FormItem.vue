<template lang="html">
  <div class="ant-row ant-form-item" :class="classes">
    <div class="ant-form-item-label" v-if="label ||　_slotContents.label" :class="{[`ant-col-${labelCol.span}`]: labelCol.span}">
      <label :for="fieldName" :class="labelClasses">
        {{label}}
        <slot name="label"></slot>
      </label>
    </div>
    <div class="">
      <div class="ant-form-item-control" :class="controlClasses">
        <span class="ant-input-wrapper">
          <slot></slot>
        </span>
        <div class="ant-form-explain" v-if="help">{{help}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { curryingContains } from '../../_utils';

export default {
  name: 'ant-form-item',
  props: {
    label: String,
    required: Boolean,
    fieldName: String,
    help: String,
    labelCol: {
      type: Object,
      default: () => ({})
    },
    wrapperCol: {
      type: Object,
      default: () => ({})
    },
    validateStatus: {
      type: String,
      validator: curryingContains(['success', 'warning', 'error', 'validating'])
    },
    hasFeedback: Boolean
  },
  computed: {
    classes() {
      const { help } = this;
      return {
        'ant-form-item-with-help': help
      };
    },
    labelClasses() {
      const { required } = this;
      return {
        'ant-form-item-required': required
      };
    },
    controlClasses() {
      const { wrapperCol, validateStatus, hasFeedback } = this;
      const classes = {
        [`ant-col-${wrapperCol.span}`]: wrapperCol.span,
        [`ant-col-offset-${wrapperCol.offset}`]: wrapperCol.offset,
        [`has-${validateStatus}`]: validateStatus,
        'has-feedback': hasFeedback
      };
      if (!validateStatus) return classes;
      if (validateStatus === 'validating') {
        classes['is-validating'] = true;
      } else {
        classes[`has-${validateStatus}`] = validateStatus;
      }
      return classes;
    }
  }
};
</script>
