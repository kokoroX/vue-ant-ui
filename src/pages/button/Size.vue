<template lang="html">
  <div>
    <code-box title="按钮类型" :code="code" id="components-button-demo-icon">
      <div slot="instance">
        <ant-button type="primary" size="large">Large</ant-button>
        <ant-button type="primary">Default</ant-button>
        <ant-button type="primary" size="small">Small</ant-button>
      </div>
      <div slot="description">
        <p>按钮有大、中、小三种尺寸。</p>
        <p>通过设置 <code>size</code> 为 <code>large</code> <code>small</code> 分别把按钮设为大、小尺寸。若不设置 <code>size</code>，则尺寸为中。</p>
      </div>
    </code-box>
  </div>
</template>

<script>
export default {
  data: () => ({
    code: `
      <ant-button type="primary" size="large">Large</ant-button>
      <ant-button type="primary">Default</ant-button>
      <ant-button type="primary" size="small">Small</ant-button>
    `
  })
}
</script>

<style lang="scss">
[id^="components-button-demo-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
</style>
