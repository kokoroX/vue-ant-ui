<template lang="html">
  <div>
    <code-box id="components-radio-demo-basic" title="基础布局" :code="code" :description="description">
      <div slot="instance">
        <div>
          <ant-radio-group default-value="a" size="large">
            <ant-radio-button value="a">杭州</ant-radio-button>
            <ant-radio-button value="b">上海</ant-radio-button>
            <ant-radio-button value="c">北京</ant-radio-button>
            <ant-radio-button value="d">成都</ant-radio-button>
          </ant-radio-group>
        </div>
        <div style="margin-top: 16px;">
          <ant-radio-group default-value="a">
            <ant-radio-button value="a">杭州</ant-radio-button>
            <ant-radio-button value="b">上海</ant-radio-button>
            <ant-radio-button value="c">北京</ant-radio-button>
            <ant-radio-button value="d">成都</ant-radio-button>
          </ant-radio-group>
        </div>
        <div style="margin-top: 16px;">
          <ant-radio-group default-value="a" size="small">
            <ant-radio-button value="a">杭州</ant-radio-button>
            <ant-radio-button value="b">上海</ant-radio-button>
            <ant-radio-button value="c">北京</ant-radio-button>
            <ant-radio-button value="d">成都</ant-radio-button>
          </ant-radio-group>
        </div>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './size.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-radio-group default-value="a" size="large">
          <ant-radio-button value="a">杭州</ant-radio-button>
          <ant-radio-button value="b">上海</ant-radio-button>
          <ant-radio-button value="c">北京</ant-radio-button>
          <ant-radio-button value="d">成都</ant-radio-button>
        </ant-radio-group>
      </div>
      <div style="margin-top: 16px;">
        <ant-radio-group default-value="a">
          <ant-radio-button value="a">杭州</ant-radio-button>
          <ant-radio-button value="b">上海</ant-radio-button>
          <ant-radio-button value="c">北京</ant-radio-button>
          <ant-radio-button value="d">成都</ant-radio-button>
        </ant-radio-group>
      </div>
      <div style="margin-top: 16px;">
        <ant-radio-group default-value="a" size="small">
          <ant-radio-button value="a">杭州</ant-radio-button>
          <ant-radio-button value="b">上海</ant-radio-button>
          <ant-radio-button value="c">北京</ant-radio-button>
          <ant-radio-button value="d">成都</ant-radio-button>
        </ant-radio-group>
      </div>
    `
  })
}
</script>
