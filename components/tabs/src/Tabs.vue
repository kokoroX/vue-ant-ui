<template lang="html">
  <div class="ant-tabs ant-tabs-top ant-tabs-line">
      <div role="tablist" class="ant-tabs-bar" tabindex="0">
          <div class="ant-tabs-nav-container ">
              <div class="ant-tabs-nav-wrap">
                  <div class="ant-tabs-nav-scroll">
                      <div class="ant-tabs-nav">
                          <!--<div class="ant-tabs-ink-bar" style="transform: translate3d(0px, 0px, 0px); width: 74px; display: block;"></div>-->
                          <div role="tab" aria-disabled="false" aria-selected="true" class="ant-tabs-tab" :class="{ 'ant-tabs-tab-active': activeKey === tab.key }" v-for="tab in tabs" @click="this.activeKey = tab.key">
                              <div class="ant-tabs-tab-inner">{{ tab.key }}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="ant-tabs-content">
          <div>
              <slot></slot>
              <!-- react-empty: 671 -->
              <!-- react-empty: 672 -->
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ant-tabs',
  props: {
    defaultActiveKey: String
  },
  data: () => ({
    activeKey: ''
  }),
  computed: {
    tabs () {
      return this.$children
    }
  },
  watch: {
    activeKey (value) {
      this.$broadcast('CHANGE_ACTIVE', value)
    }
  },
  ready () {
    if (this.defaultActiveKey) this.activeKey = this.defaultActiveKey
  }
}
</script>
