<template lang="html">
  <div>
    <code-box title="按钮类型" :code="code" id="components-button-demo-basic">
      <div slot="instance">
        <ant-button type="primary" loading>
          Loading
        </ant-button>
        <ant-button type="primary" size="small" loading>
          Loading
        </ant-button>
        <br />
        <ant-button type="primary" :loading="loading" :on-click="enterLoading">
          Click me!
        </ant-button>
        <ant-button type="primary" icon="poweroff" :loading="iconLoading" :on-click="enterIconLoading">
          Click me!
        </ant-button>
      </div>
      <div slot="description">
        <p>添加 <code>loading</code> 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。</p>
      </div>
    </code-box>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    iconLoading: false,
    code: `
      <template>
        <div>
          <div>
            <ant-button type="primary" loading>
              Loading
            </ant-button>
            <ant-button type="primary" size="small" loading>
              Loading
            </ant-button>
            <br />
            <ant-button type="primary" :loading="loading" :on-click="enterLoading">
              Click me!
            </ant-button>
            <ant-button type="primary" icon="poweroff" :loading="iconLoading" :on-click="enterIconLoading">
              Click me!
            </ant-button>
          </div>
          <div slot="description">
            <p>添加 <code>loading</code> 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。</p>
          </div>
        </div>
      </template>
      \<script\>
      export default {
        data: () => ({
          loading: false,
          iconLoading: false
        }),
        methods: {
          enterLoading () {
            this.loading = true
          },
          enterIconLoading () {
            this.iconLoading = true
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    enterLoading () {
      this.loading = true
    },
    enterIconLoading () {
      this.iconLoading = true
    }
  }
}
</script>

<style lang="scss">
[id^="components-button-demo-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
</style>
