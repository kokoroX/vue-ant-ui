<template lang="html">
  <div>
    <code-box title="按钮类型" :code="code" id="components-button-demo-icon">
      <div slot="instance">
        <ant-button type="primary" shape="circle" icon="search"></ant-button>
        <ant-button type="primary" icon="search">搜索</ant-button>
        <br />
        <ant-button type="ghost" shape="circle-outline" icon="search"></ant-button>
        <ant-button type="ghost" icon="search">Search</ant-button>
      </div>
      <div slot="description">
        <p>当需要在 <code>Button</code> 内嵌入 <code>Icon</code> 时，可以设置 <code>icon</code> 属性，或者直接在 <code>Button</code> 内使用 <code>Icon</code> 组件。</p>
        <p>如果想控制 <code>Icon</code> 具体的位置，只能直接使用 <code>Icon</code> 组件，而非 <code>icon</code> 属性。</p>
      </div>
    </code-box>
  </div>
</template>

<script>
export default {
  data: () => ({
    code: `
      <ant-button type="primary">Primary</ant-button>
      <ant-button>Default</ant-button>
      <ant-button type="ghost">Ghost</ant-button>
      <ant-button type="dashed">Dashed</ant-button>
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
