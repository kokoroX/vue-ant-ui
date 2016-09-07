<template lang="html">
  <div>
    <code-box id="components-radio-demo-basic" title="RadioGroup 垂直" :code="code" :description="description">
      <div slot="instance">
        <ant-radio-group :on-change="onChange" :value="value">
          <ant-radio :style="radioStyle" key="a" :value="1">Option A</ant-radio>
          <ant-radio :style="radioStyle" key="b" :value="2">Option B</ant-radio>
          <ant-radio :style="radioStyle" key="c" :value="3">Option C</ant-radio>
          <ant-radio :style="radioStyle" key="d" :value="4">
            More...
            <ant-input :styles="{width: '100px', marginLeft: '10px'}" v-if="value === 4"></ant-input>
          </ant-radio>
        </ant-radio-group>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './radiogroup-more.md'

export default {
  data: () => ({
    description,
    code: `
      <template lang="html">
        <div>
          <ant-radio-group :on-change="onChange" :value="value">
            <ant-radio :style="radioStyle" key="a" :value="1">Option A</ant-radio>
            <ant-radio :style="radioStyle" key="b" :value="2">Option B</ant-radio>
            <ant-radio :style="radioStyle" key="c" :value="3">Option C</ant-radio>
            <ant-radio :style="radioStyle" key="d" :value="4">
              More...
              <ant-input :styles="{width: '100px', marginLeft: '10px'}" v-if="value === 4"></ant-input>
            </ant-radio>
          </ant-radio-group>
        </div>
      </template>

      \<script\>
      export default {
        data: () => ({
          value: 1,
          radioStyle: {
            display: 'block',
            height: '30px',
            lineHeight: '30px'
          }
        }),
        methods: {
          onChange (e) {
            console.log('radio checked', e.target._value)
            this.value = e.target._value
          }
        }
      }
      \</script\>
    `,
    value: 1,
    radioStyle: {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    }
  }),
  methods: {
    onChange (e) {
      console.log(e)
      // console.log('radio checked', e.target._value)
      // this.value = e.target._value
    }
  }
}
</script>
