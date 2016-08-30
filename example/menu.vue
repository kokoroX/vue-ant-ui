<template lang="html">
  <div class="demo">
    <ant-menu :on-click="handleClick" :selected-keys="[current]" mode="horizontal">
      <ant-menu-item key="mail">
        <ant-icon type="mail"></ant-icon>导航一
      </ant-menu-item>
      <ant-menu-item key="app" disabled>
        <ant-icon type="appstore"></ant-icon>导航二
      </ant-menu-item>
      <ant-sub-menu>
        <span slot="title">
          <ant-icon type="setting"></ant-icon>导航 - 子菜单
        </span>
        <ant-menu-item-group title="分组1">
          <ant-menu-item key="setting:1">选项1</ant-menu-item>
          <ant-menu-item key="setting:2">选项2</ant-menu-item>
        </ant-menu-item-group>
        <ant-menu-item-group title="分组2">
          <ant-menu-item key="setting:3">选项3</ant-menu-item>
          <ant-menu-item key="setting:4">选项4</ant-menu-item>
        </ant-menu-item-group>
      </ant-sub-menu>
      <ant-menu-item key="alipay">
        <a href="http://www.alipay.com/" target="_blank">导航四 - 链接</a>
      </ant-menu-item>
    </ant-menu>



    <ant-menu :on-click="handleClick" style="width: 240px;" :default-open-keys="['sub1']" :selected-keys="[current]" mode="inline">
      <ant-sub-menu key="sub1">
        <span slot="title">
          <ant-icon type="mail"></ant-icon>
          <span>导航一</span>
        </span>
        <ant-menu-item-group title="分组1">
          <ant-menu-item key="1">选项1</ant-menu-item>
          <ant-menu-item key="2">选项2</ant-menu-item>
        </ant-menu-item-group>
        <ant-menu-item-group title="分组2">
          <ant-menu-item key="3">选项3</ant-menu-item>
          <ant-menu-item key="4">选项4</ant-menu-item>
        </ant-menu-item-group>
      </ant-sub-menu>
      <ant-sub-menu key="sub2">
        <span slot="title">
          <ant-icon type="appstore"></ant-icon>
          <span>导航二</span>
        </span>
        <ant-menu-item key="5">选项5</ant-menu-item>
        <ant-menu-item key="6">选项6</ant-menu-item>
        <ant-sub-menu key="sub3" title="三级导航">
          <ant-menu-item key="7">选项7</ant-menu-item>
          <ant-menu-item key="8">选项8</ant-menu-item>
        </ant-sub-menu>
      </ant-sub-menu>
      <ant-sub-menu key="sub4">
        <span slot="title">
          <ant-icon type="setting"></ant-icon>
          <span>导航三</span>
        </span>
        <ant-menu-item key="9">选项9</ant-menu-item>
        <ant-menu-item key="10">选项10</ant-menu-item>
        <ant-menu-item key="11">选项11</ant-menu-item>
        <ant-menu-item key="12">选项12</ant-menu-item>
      </ant-sub-menu>
    </ant-menu>



    <ant-menu :on-click="handleClick" style="width: 240px" :selected-keys="[current]" mode="vertical">
      <ant-sub-menu key="sub1">
        <template slot="title">
          <span><ant-icon type="mail"></ant-icon><span>导航一</span></span>
        </template>
        <ant-menu-item-group title="分组1">
          <ant-menu-item key="1">选项1</ant-menu-item>
          <ant-menu-item key="2">选项2</ant-menu-item>
        </ant-menu-item-group>
        <ant-menu-item-group title="分组2">
          <ant-menu-item key="3">选项3</ant-menu-item>
          <ant-menu-item key="4">选项4</ant-menu-item>
        </ant-menu-item-group>
      </ant-sub-menu>
      <ant-sub-menu key="sub2">
        <template slot="title">
          <span><ant-icon type="appstore"></ant-icon><span>导航二</span></span>
        </template>
        <ant-menu-item key="5">选项5</ant-menu-item>
        <ant-menu-item key="6">选项6</ant-menu-item>
        <ant-sub-menu key="sub3">
          <template slot="title">
            三级导航
          </template>
          <ant-menu-item key="7">选项7</ant-menu-item>
          <ant-menu-item key="8">选项8</ant-menu-item>
        </ant-sub-menu>
      </ant-sub-menu>
      <ant-sub-menu key="sub4">
        <template slot="title">
          <span><ant-icon type="setting"></ant-icon><span>导航三</span></span>
        </template>
        <ant-menu-item key="9">选项9</ant-menu-item>
        <ant-menu-item key="10">选项10</ant-menu-item>
        <ant-menu-item key="11">选项11</ant-menu-item>
        <ant-menu-item key="12">选项12</ant-menu-item>
      </ant-sub-menu>
    </ant-menu>



    <div>
      <ant-switch :on-change="changeTheme" checked-children="暗" un-checked-children="亮"></ant-switch>
      <br />
      <br />
      <ant-menu :theme="theme" :on-click="handleClick" style="width: 240;" default-open-keys="['sub1']" :selected-keys="[current]" mode="inline">
        <ant-sub-menu key="sub1">
          <span slot="title">
            <ant-icon type="mail"></ant-icon><span>导航一</span>
          </span>
          <ant-menu-item key="1">选项1</ant-menu-item>
          <ant-menu-item key="2">选项2</ant-menu-item>
          <ant-menu-item key="3">选项3</ant-menu-item>
          <ant-menu-item key="4">选项4</ant-menu-item>
        </ant-sub-menu>
        <ant-sub-menu key="sub2">
          <span slot="title">
            <ant-icon type="appstore"></ant-icon><span>导航二</span>
          </span>
          <ant-menu-item key="5">选项5</ant-menu-item>
          <ant-menu-item key="6">选项6</ant-menu-item>
          <ant-sub-menu key="sub3" title="三级导航">
            <ant-menu-item key="7">选项7</ant-menu-item>
            <ant-menu-item key="8">选项8</ant-menu-item>
          </ant-sub-menu>
        </ant-sub-menu>
        <ant-sub-menu key="sub4">
          <span slot="title">
            <ant-icon type="setting"></ant-icon><span>导航三</span>
          </span>
          <ant-menu-item key="9">选项9</ant-menu-item>
          <ant-menu-item key="10">选项10</ant-menu-item>
          <ant-menu-item key="11">选项11</ant-menu-item>
          <ant-menu-item key="12">选项12</ant-menu-item>
        </ant-sub-menu>
      </ant-menu>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current: 'mail',
        theme: 'light'
      };
    },
    methods: {
      handleClick(e) {
        console.log('click ', e);
        this.current = e.key;
      },
      changeTheme(value) {
        this.theme = value ? 'dark' : 'light';
      }
    }
  };
</script>
