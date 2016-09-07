<template lang="html">
  <ant-modal
    class="ant-confirm"
    :class="`ant-confirm-${type}`"
    :visible.sync="visible"
    :width="width"
    :icon-type="iconType"
    :ok-text="okText"
    :cancel-type="cancelText"
    :has-footer="false">
    <div style="zoom: 1; overflow: hidden;">
      <div class="ant-confirm-body">
        <i class="anticon anticon-question-circle" :class="`anticon-${iconType}`"></i>
        <span class="ant-confirm-title">{{ title }}</span>
        <div class="ant-confirm-content">{{{ content }}}</div>
      </div>
      <div class="ant-confirm-btns">
        <v-button type="ghost" size="large" :on-click="handleCancel" v-if="okCancel">
          {{ cancelText }}
        </v-button>
        <v-button type="primary" size="large" :on-click="handleOk">
          {{ okText }}
        </v-button>
      </div>
    </div>
  </ant-modal>
</template>

<script>
import vButton from './Button';
export default {
  data() {
    return {
      visible: true
    };
  },
  components: {
    vButton
  },
  methods: {
    destroy() {
      this.visible = false;
      this.$remove();
    },
    handleCallback(fn) {
      const callback = this[fn];
      if (callback) {
        let ret;
        if (callback.length) {
          ret = callback(this.destroy);
        } else {
          ret = callback();
          if (!ret) this.destroy();
        }

        if (ret && ret.then) {
          ret.then(this.destroy);
        }
      } else {
        this.destroy();
      }
    },
    handleOk() {
      this.handleCallback('onOk');
    },
    handleCancel() {
      this.handleCallback('onCancel');
    }
  }
};
</script>
