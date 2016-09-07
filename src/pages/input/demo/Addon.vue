<template lang="html">
  <div>
    <code-box id="components-input-demo-addon" title="前置/后置标签" :code="code" :description="description">
      <div slot="instance">
        <ant-input addon-before="Http://" addon-after=".com" default-value="mysite"></ant-input>
        <div style="margin-top: 8px;">
          <ant-input default-value="mysite">
            <span slot="addonBefore">选择框未实现</span>
            <span slot="addonAfter">选择框未实现</span>
          </ant-input>
        </div>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './addon.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-input addon-before="Http://" addon-after=".com" default-value="mysite"></ant-input>
        <div style="margin-top: 8px;">
          <ant-input default-value="mysite">
            <span slot="addonBefore">选择框未实现</span>
            <span slot="addonAfter">选择框未实现</span>
          </ant-input>
        </div>
      </div>
    `
  })
}
</script>
