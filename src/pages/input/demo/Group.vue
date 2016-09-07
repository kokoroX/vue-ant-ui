<template lang="html">
  <div>
    <code-box id="components-input-demo-group" title="输入框组合" :code="code" :description="description">
      <div slot="instance">
        <ant-input-group size="large">
          <ant-col span="4">
            <ant-input default-value="0571"></ant-input>
          </ant-col>
          <ant-col span="8">
            <ant-input default-value="26888888"></ant-input>
          </ant-col>
        </ant-input-group>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './group.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-input-group size="large">
          <ant-col span="4">
            <ant-input default-value="0571"></ant-input>
          </ant-col>
          <ant-col span="8">
            <ant-input default-value="26888888"></ant-input>
          </ant-col>
        </ant-input-group>
      </div>
    `
  })
}
</script>
