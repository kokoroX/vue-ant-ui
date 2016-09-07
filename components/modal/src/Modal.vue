<template lang="html">
  <div>
    <div class="ant-modal-mask" v-show="visible" :class="{ 'ant-modal-mask-hidden': !visible, 'fade-enter-active': visible, 'fabe-leave-active': !visible }" transition="fade" :style="style"></div>
    <div class="ant-modal-wrap" v-show="visible" transition="zoom" :class="[wrapClassName, { 'zoom-enter-active': visible, 'zoom-leave-active': !visible }]" role="dialog" @click="onMaskClick">
      <div role="document" class="ant-modal" style="transform-origin: 10.5px 70px 0px;" :style="styles">
        <div class="ant-modal-content">
          <button aria-label="Close" class="ant-modal-close" @click.prevent="close" v-if="closable"><span class="ant-modal-close-x"></span></button>
          <div class="ant-modal-header" v-if="title">
            <div class="ant-modal-title">{{ title }}</div>
          </div>
          <div class="ant-modal-body">
            <slot></slot>
          </div>
          <div class="ant-modal-footer" v-if="hasFooter">
            <slot name="footer">
              <ant-button html-type="button" type="ghost" size="large" :on-click="handleCancel"><span>取 消</span></ant-button>
              <ant-button html-type="button" type="primary" size="large" :loading="confirmLoading" :on-click="onOk"><span>确 定</span></ant-button>
            </slot>
          </div>
        </div>
        <div tabindex="0" style="width: 0px; height: 0px; overflow: hidden;">sentinel</div>
      </div>
    </div>
  </div>
</template>

<script>
  import AntButton from '../../button/src/Button';
  export default {
    name: 'ant-modal',
    components: {
      AntButton
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      confirmLoading: Boolean,
      title: String,
      closable: {
        type: Boolean,
        default: true
      },
      onOk: {
        type: Function,
        default: () => {}
      },
      onCancel: Function,
      width: {
        type: [String, Number],
        default: 520
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      hasFooter: {
        type: Boolean,
        default: true
      },
      maskClosable: {
        type: Boolean,
        default: false
      },
      style: Object,
      wrapClassName: String
    },
    computed: {
      styles() {
        const { width } = this;
        return {
          width: `${width}px`
        };
      }
    },
    methods: {
      onMaskClick(e) {
        if (e.target === e.currentTarget && this.maskClosable) this.close(e);
      },
      close(e) {
        this.visible = false;
      },
      handleCancel() {
        this.onCancel ? this.onCancel() : this.close();
      }
    }
  };
</script>
