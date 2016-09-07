<template lang="html">
  <div>
    <code-box title="按钮类型" :code="code" id="components-button-demo-button-group">
      <div slot="instance">
        <h4>Basic</h4>
        <ant-button-group>
          <ant-button>Cancel</ant-button>
          <ant-button type="primary">OK</ant-button>
        </ant-button-group>
        <ant-button-group>
          <ant-button disabled>L</ant-button>
          <ant-button disabled>M</ant-button>
          <ant-button disabled>R</ant-button>
        </ant-button-group>
        <ant-button-group>
          <ant-button type="primary">L</ant-button>
          <ant-button>M</ant-button>
          <ant-button type="ghost">M</ant-button>
          <ant-button type="dashed">R</ant-button>
        </ant-button-group>

        <h4>With Icon</h4>
        <ant-button-group>
          <ant-button type="primary">
            <ant-icon type="left"></ant-icon>Go back
          </ant-button>
          <ant-button type="primary">
            Go forward<ant-icon type="right"></ant-icon>
          </ant-button>
        </ant-button-group>
        <ant-button-group>
          <ant-button type="primary" icon="cloud" />
          <ant-button type="primary" icon="cloud-download" />
        </ant-button-group>

        <h4>Size</h4>
        <ant-button-group size="large">
          <ant-button type="ghost">Large</ant-button>
          <ant-button type="ghost">Large</ant-button>
        </ant-button-group>
        <ant-button-group>
          <ant-button type="ghost">Default</ant-button>
          <ant-button type="ghost">Default</ant-button>
        </ant-button-group>
        <ant-button-group size="small">
          <ant-button type="ghost">Small</ant-button>
          <ant-button type="ghost">Small</ant-button>
        </ant-button-group>
      </div>
      <div slot="description">
        <p>可以将多个 <code>Button</code> 放入 <code>Button.Group</code> 的容器中。</p>
        <p>通过设置 <code>size</code> 为 <code>large</code> <code>small</code> 分别把按钮组合设为大、小尺寸。若不设置 <code>size</code>，则尺寸为中。</p>
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
#components-button-demo-button-group .ant-btn {
    margin-bottom: 12px;
    margin-right: 0;
}
</style>
