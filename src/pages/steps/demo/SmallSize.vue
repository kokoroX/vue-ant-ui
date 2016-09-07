<template lang="html">
  <div>
    <code-box id="components-steps-demo-small-size" title="迷你版" :code="code" :description="description">
      <div slot="instance">
        <ant-steps size="small" :current="1">
          <ant-step>
            <template slot="title">已完成</template>
          </ant-step>
          <ant-step>
            <template slot="title">进行中</template>
          </ant-step>
          <ant-step>
            <template slot="title">待运行</template>
          </ant-step>
          <ant-step>
            <template slot="title">待运行</template>
          </ant-step>
        </ant-steps>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './small-size.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-steps size="small" :current="1">
          <ant-step>
            <template slot="title">已完成</template>
          </ant-step>
          <ant-step>
            <template slot="title">进行中</template>
          </ant-step>
          <ant-step>
            <template slot="title">待运行</template>
          </ant-step>
          <ant-step>
            <template slot="title">待运行</template>
          </ant-step>
        </ant-steps>
      </div>
    `
  })
}
</script>
