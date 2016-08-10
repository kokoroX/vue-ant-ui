<template>
  <div>
    <ant-badge :count="99" :overflow-count="10">
      <a href="#" class="head-example"></a>
    </ant-badge>
    <ant-badge :count="1000" :overflow-count="999">
      <a href="#" class="head-example"></a>
    </ant-badge>
  </div>
</template>

<style>
.ant-badge {
  margin-right: 16px;
}
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 6px;
  background: #eee;
  display: inline-block;
}
</style>
