<template lang="html">
  <div>
    <code-box id="components-steps-demo-step-next" title="切换到下一步" :code="code" :description="description">
      <div slot="instance">
        <div style="margin-bottom: 24px;">当前正在执行第 {{current + 1}} 步</div>
        <ant-steps :current="current">
          <ant-step v-for="step in steps">
            <template slot="title">{{step.title}}</template>
            <template slot="description">{{step.description}}</template>
          </ant-step>
        </ant-steps>
        <div style="margin-top: 24px;">
          <ant-button :on-click="next">下一步</ant-button>
        </div>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './step-next.md'
const array = Array.apply(null, Array(Math.floor(Math.random() * 3) + 3))
const steps = array.map((item, i) => ({
  title: `步骤${i + 1}`
}))

export default {
  data: () => ({
    steps: steps,
    current: Math.floor(Math.random() * steps.length),
    description,
    code: `
      <template lang="html">
        <div>
          <div style="margin-bottom: 24px;">当前正在执行第 {{current + 1}} 步</div>
          <ant-steps :current="current">
            <ant-step v-for="step in steps">
              <template slot="title">{{step.title}}</template>
              <template slot="description">{{step.description}}</template>
            </ant-step>
          </ant-steps>
          <div style="margin-top: 24px;">
            <ant-button :on-click="next">下一步</ant-button>
          </div>
        </div>
      </template>

      \<script\>
      const array = Array.apply(null, Array(Math.floor(Math.random() * 3) + 3))
      const steps = array.map((item, i) => ({
        title: \`步骤\${i + 1}\`
      }))

      export default {
        data: () => ({
          steps: steps,
          current: Math.floor(Math.random() * steps.length)
        }),
        methods: {
          next () {
            let current = this.current + 1
            if (current === this.steps.length) {
              current = 0
            }
            this.current = current
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    next () {
      let current = this.current + 1
      if (current === this.steps.length) {
        current = 0
      }
      this.current = current
    }
  }
}
</script>
