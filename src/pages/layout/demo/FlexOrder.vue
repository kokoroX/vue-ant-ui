<template lang="html">
  <div>
    <code-box id="components-layout-demo-flex-align" title="Flex 排序" :code="code" :description="description">
      <div slot="instance">
        <ant-row type="flex">
          <ant-col span="6" order="4">1 ant-col-order-4</ant-col>
          <ant-col span="6" order="3">2 ant-col-order-3</ant-col>
          <ant-col span="6" order="2">3 ant-col-order-2</ant-col>
          <ant-col span="6" order="1">4 ant-col-order-1</ant-col>
        </ant-row>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './flex-order.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-row type="flex">
          <ant-col span="6" order="4">1 ant-col-order-4</ant-col>
          <ant-col span="6" order="3">2 ant-col-order-3</ant-col>
          <ant-col span="6" order="2">3 ant-col-order-2</ant-col>
          <ant-col span="6" order="1">4 ant-col-order-1</ant-col>
        </ant-row>
      </div>
    `
  })
}
</script>
