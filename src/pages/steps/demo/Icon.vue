<template lang="html">
  <div>
    <code-box id="components-steps-demo-icon" title="带图标的步骤条" :code="code" :description="description">
      <div slot="instance">
        <ant-steps>
          <ant-step status="finish" icon="cloud">
            <template slot="title">步骤1</template>
          </ant-step>
          <ant-step status="process" icon="apple">
            <template slot="title">步骤2</template>
          </ant-step>
          <ant-step status="wait" icon="github">
            <template slot="title">步骤3</template>
          </ant-step>
        </ant-steps>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './icon.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-steps>
          <ant-step status="finish" icon="cloud">
            <template slot="title">步骤1</template>
          </ant-step>
          <ant-step status="process" icon="apple">
            <template slot="title">步骤2</template>
          </ant-step>
          <ant-step status="wait" icon="github">
            <template slot="title">步骤3</template>
          </ant-step>
        </ant-steps>
      </div>
    `
  })
}
</script>
