<template lang="html">
  <div>
    <code-box title="按钮类型" :code="code" id="components-button-demo-basic">
      <div slot="instance">
        <ant-button type="primary">Primary</ant-button>
        <ant-button>Default</ant-button>
        <ant-button type="ghost">Ghost</ant-button>
        <ant-button type="dashed">Dashed</ant-button>
      </div>
      <div slot="description">
        <p>按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。</p>
        <p>通过设置
          <code>type</code>为
          <code>primary</code>
          <code>ghost</code>
          <code>dashed</code>
          可分别创建主按钮、幽灵按钮、虚线按钮，若不设置
          <code>type</code>
          值则为次按钮。不同的样式可以用来区别其重要程度。
        </p>
        <p>主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。</p>
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
