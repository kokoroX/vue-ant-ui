<template lang="html">
  <div>
    <code-box id="components-back-top-demo-custom" title="自定义样式" :code="code" :description="description">
      <div slot="instance">
        <ant-back-top style="bottom: 100px;">
          <div style="height: 40px; width: 40px; line-height: 40px; border-radius: 4px; background-color: #57c5f7; color: #fff; text-align: center; font-size: 20px;">UP</div>
        </ant-back-top>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './custom.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-back-top style="bottom: 100px;">
          <div style="height: 40px; width: 40px; line-height: 40px; border-radius: 4px; background-color: #57c5f7; color: #fff; text-align: center; font-size: 20px;">UP</div>
        </ant-back-top>
      </div>
    `
  })
}
</script>
