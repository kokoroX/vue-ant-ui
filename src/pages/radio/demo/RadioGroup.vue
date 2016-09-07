<template lang="html">
  <div>
    <code-box id="components-radio-demo-radio-group" title="RadioGroup" :code="code" :description="description">
      <div slot="instance">
        <ant-radio-group :on-change="onChange" :value="value">
          <ant-radio key="a" :value="1">A</ant-radio>
          <ant-radio key="b" :value="2">B</ant-radio>
          <ant-radio key="c" :value="3">C</ant-radio>
          <ant-radio key="d" :value="4">D</ant-radio>
        </ant-radio-group>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './radiogroup.md'

export default {
  data: () => ({
    value: 1,
    description,
    code: `
      <template lang="html">
        <div>
          <ant-radio-group :on-change="onChange" :value="value">
            <ant-radio key="a" :value="1">A</ant-radio>
            <ant-radio key="b" :value="2">B</ant-radio>
            <ant-radio key="c" :value="3">C</ant-radio>
            <ant-radio key="d" :value="4">D</ant-radio>
          </ant-radio-group>
        </div>
      </template>

      \<script\>
      export default {
        data: () => ({
          value: 1
        }),
        methods: {
          onChange (e) {
            this.value = e.target._value
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    onChange (e) {
      console.log(e)
      // this.value = e.target._value
    }
  }
}
</script>
