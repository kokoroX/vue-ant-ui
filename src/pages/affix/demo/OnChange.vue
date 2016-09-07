<template lang="html">
  <div>
    <code-box id="components-affix-demo-offset" title="偏移" :code="code" :description="description">
      <div slot="instance">
        <ant-affix :offset-top="120" :on-change="handleChange">
          <ant-button>固定在距离顶部 120px 的位置</ant-button>
        </ant-affix>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './on-change.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-affix :offset-top="75">
          <ant-button type="primary">固定在距离顶部 75px 的位置</ant-button>
        </ant-affix>
      </div>
    `
  }),
  methods: {
    handleChange (affixed) {
      console.log(affixed)
    }
  }
}
</script>
