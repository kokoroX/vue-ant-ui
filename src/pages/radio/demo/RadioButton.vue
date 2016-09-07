<template lang="html">
  <div>
    <code-box id="components-radio-demo-basic" title="按钮样式" :code="code" :description="description">
      <div slot="instance">
        <div>
          <div>
            <ant-radio-group :on-change="onChange" default-value="a">
              <ant-radio-button value="a">杭州</ant-radio-button>
              <ant-radio-button value="b">上海</ant-radio-button>
              <ant-radio-button value="c">北京</ant-radio-button>
              <ant-radio-button value="d">成都</ant-radio-button>
            </ant-radio-group>
          </div>
          <div style="margin-top: 16px;">
            <ant-radio-group :on-change="onChange" default-value="a">
              <ant-radio-button value="a">杭州</ant-radio-button>
              <ant-radio-button value="b" disabled>上海</ant-radio-button>
              <ant-radio-button value="c">北京</ant-radio-button>
              <ant-radio-button value="d">成都</ant-radio-button>
            </ant-radio-group>
          </div>
          <div style="margin-top: 16px;">
            <ant-radio-group disabled :on-change="onChange" default-value="a">
              <ant-radio-button value="a">杭州</ant-radio-button>
              <ant-radio-button value="b">上海</ant-radio-button>
              <ant-radio-button value="c">北京</ant-radio-button>
              <ant-radio-button value="d">成都</ant-radio-button>
            </ant-radio-group>
          </div>
        </div>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './radiobutton.md'

export default {
  data: () => ({
    description,
    code: `
      <template lang="html">
        <div>
          <div>
            <div>
              <ant-radio-group :on-change="onChange" default-value="a">
                <ant-radio-button value="a">杭州</ant-radio-button>
                <ant-radio-button value="b">上海</ant-radio-button>
                <ant-radio-button value="c">北京</ant-radio-button>
                <ant-radio-button value="d">成都</ant-radio-button>
              </ant-radio-group>
            </div>
            <div style="margin-top: 16px;">
              <ant-radio-group :on-change="onChange" default-value="a">
                <ant-radio-button value="a">杭州</ant-radio-button>
                <ant-radio-button value="b" disabled>上海</ant-radio-button>
                <ant-radio-button value="c">北京</ant-radio-button>
                <ant-radio-button value="d">成都</ant-radio-button>
              </ant-radio-group>
            </div>
            <div style="margin-top: 16px;">
              <ant-radio-group disabled :on-change="onChange" default-value="a">
                <ant-radio-button value="a">杭州</ant-radio-button>
                <ant-radio-button value="b">上海</ant-radio-button>
                <ant-radio-button value="c">北京</ant-radio-button>
                <ant-radio-button value="d">成都</ant-radio-button>
              </ant-radio-group>
            </div>
          </div>
        </div>
      </template>

      \<script\>
      export default {
        methods: {
          onChange (e) {
            console.log(\`radio checked:\${e.target._value}\`)
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    onChange (e) {
      // console.log(`radio checked:${e.target._value}`)
    }
  }
}
</script>
