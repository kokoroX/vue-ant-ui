<template lang="html">
  <div>
    <code-box id="components-spin-demo-inside" title="卡片加载中" :code="code" :description="description">
      <div slot="instance">
        <div>
          <ant-spin :spinning="loading">
            <ant-alert message="消息提示的文案"
              description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
              type="info"
            ></ant-alert>
          </ant-spin>
          切换加载状态：<ant-switch :checked="loading" :on-change="toggle"></ant-switch>
        </div>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './nested.md'

export default {
  data: () => ({
    loading: false,
    description,
    code: `
      <template lang="html">
        <div>
          <div>
            <ant-spin :spinning="loading">
              <ant-alert message="消息提示的文案"
                description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
                type="info"
              ></ant-alert>
            </ant-spin>
            切换加载状态：<ant-switch :checked="loading" :on-change="toggle"></ant-switch>
          </div>
        </div>
      </template>

      \<script\>
      export default {
        data: () => ({
          loading: false
        }),
        methods: {
          toggle (value) {
            this.loading = value
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    toggle (value) {
      this.loading = value
    }
  }
}
</script>
