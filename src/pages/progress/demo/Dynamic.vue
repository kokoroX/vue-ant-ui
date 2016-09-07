<template lang="html">
  <div>
    <code-box id="components-progress-demo-dynamic" title="动态展示" :code="code" :description="description">
      <div slot="instance">
        <ant-progress :percent="percent"></ant-progress>
        <ant-button-group>
          <ant-button type="ghost" :on-click="decline" icon="minus"></ant-button>
          <ant-button type="ghost" :on-click="increase" icon="plus"></ant-button>
        </ant-button-group>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './dynamic.md'

export default {
  data: () => ({
    percent: 0,
    description,
    code: `
      <div>
        <ant-progress type="circle" :percent="75"></ant-progress>
        <ant-progress type="circle" :percent="70" status="exception"></ant-progress>
        <ant-progress type="circle" :percent="100"></ant-progress>
      </div>
    `
  }),
  methods: {
    increase () {
      let percent = this.percent + 10
      if (percent > 100) {
        percent = 100
      }
      this.percent = percent
    },
    decline () {
      let percent = this.percent - 10
      if (percent < 0) {
        percent = 0
      }
      this.percent = percent
    }
  }
}
</script>
