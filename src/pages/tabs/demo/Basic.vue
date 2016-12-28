<template lang="html">
  <div>
    <code-box id="components-tabs-demo-basic" title="基本" :code="code" :description="description">
      <div slot="instance">
        <ant-tabs default-active-key="1">
          <ant-tabs-plane key="1">123</ant-tabs-plane>
          <ant-tabs-plane key="2">222</ant-tabs-plane>
        </ant-tabs>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './basic.md'

export default {
  data: () => ({
    description,
    code: `
      <template lang="html">
        <div>
          <ant-tabs></ant-tabs>
        </div>
      </template>
    `
  })
}
</script>
