<template lang="html">
  <div>
    <code-box title="按钮类型" :code="code" id="components-button-demo-basic">
      <div slot="instance">
        <ant-button type="primary">Primary</ant-button>
        <ant-button type="primary" disabled>Primary(disabled)</ant-button>
        <br />
        <ant-button>Default</ant-button>
        <ant-button disabled>Default(disabled)</ant-button>
        <br />
        <ant-button type="ghost">Ghost</ant-button>
        <ant-button type="ghost" disabled>Ghost(disabled)</ant-button>
        <br />
        <ant-button type="dashed">Dashed</ant-button>
        <ant-button type="dashed" disabled>Dashed(disabled)</ant-button>
      </div>
      <div slot="description">
        <p>添加 <code>disabled</code> 属性即可让按钮处于不可用状态，同时按钮样式也会改变。</p>
      </div>
    </code-box>
  </div>
</template>

<script>
export default {
  data: () => ({
    code: `
      <ant-button type="primary">Primary</ant-button>
      <ant-button type="primary" disabled>Primary(disabled)</ant-button>
      <br />
      <ant-button>Default</ant-button>
      <ant-button disabled>Default(disabled)</ant-button>
      <br />
      <ant-button type="ghost">Ghost</ant-button>
      <ant-button type="ghost" disabled>Ghost(disabled)</ant-button>
      <br />
      <ant-button type="dashed">Dashed</ant-button>
      <ant-button type="dashed" disabled>Dashed(disabled)</ant-button>
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
