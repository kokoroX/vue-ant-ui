<template lang="html">
  <div class="main-wrapper">
    <ant-row>
      <ant-col span="4">
        <ant-menu :default-open-keys="['sub1']" mode="inline">
          <ant-sub-menu key="sub1">
            <span slot="title">
              <span>components</span>
            </span>
            <ant-menu-item-group :title="menu.name" v-for="menu in menuList">
              <ant-menu-item key="1" v-for="item in menu.sub">
                <a v-link="item.link">{{item.name}}</a>
              </ant-menu-item>
            </ant-menu-item-group>
          </ant-sub-menu>
        </ant-menu>
      </ant-col>
      <ant-col span="20" class="main-container">
        <router-view class="markdown"></router-view>
      </ant-col>
    </ant-row>
  </div>
</template>

<script>
import menuList from 'data/menu'

export default {
  data: () => ({
    menuList
  })
}
</script>

<style lang="scss">
.main-wrapper {
  width: 92%;
  margin: 0 auto;
  border-radius: 6px;
  padding: 24px 0 0;
  margin-bottom: 24px;
  background: #fff;
  overflow: hidden;
  position: relative;
}
.main-container {
  padding: 0 6% 120px 4%;
  margin-left: -1px;
  min-height: 500px;
  border-left: 1px solid #e9e9e9;
  background: #fff;
  overflow: hidden;
  position: relative;
}
.markdown {
  color: #666;
  font-size: 14px;
  line-height: 1.8;
}
</style>
