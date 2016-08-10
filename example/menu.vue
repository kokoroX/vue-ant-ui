<template lang="html">
  <div class="demo">
    <ant-menu :on-click="handleClick"
       style="width: 240px"
       :selected-keys="[current]"
       mode="vertical"
     >
       <sub-menu key="sub1">
         <template slot="title">
           <span><icon type="mail"></icon><span>导航一</span></span>
         </template>
         <menu-item-group title="分组1">
           <menu-item key="1">选项1</menu-item>
           <menu-item key="2">选项2</menu-item>
         </menu-item-group>
         <menu-item-group title="分组2">
           <menu-item key="3">选项3</menu-item>
           <menu-item key="4">选项4</menu-item>
         </menu-item-group>
       </sub-menu>
       <sub-menu key="sub2">
         <template slot="title">
           <span><icon type="appstore"></icon><span>导航二</span></span>
         </template>
         <menu-item key="5">选项5</menu-item>
         <menu-item key="6">选项6</menu-item>
         <sub-menu key="sub3">
           <template slot="title">
             三级导航
           </template>
           <menu-item key="7">选项7</menu-item>
           <menu-item key="8">选项8</menu-item>
         </sub-menu>
       </sub-menu>
       <sub-menu key="sub4" title={}>
         <template slot="title">
           <span><icon type="setting"></icon><span>导航三</span></span>
         </template>
         <menu-item key="9">选项9</menu-item>
         <menu-item key="10">选项10</menu-item>
         <menu-item key="11">选项11</menu-item>
         <menu-item key="12">选项12</menu-item>
       </sub-menu>
     </ant-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current: 'mail'
      };
    },
    methods: {
      handleClick(e) {
        this.current = e.key;
      }
    }
  };
</script>

<style lang="css">
</style>
