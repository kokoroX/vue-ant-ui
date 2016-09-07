<template lang="html">
  <header class="header">
    <ant-row>
      <ant-col span="6">
        <a class="logo" href="/">
          <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg">
          <span>Ant Design</span>
        </a>
      </ant-col>
      <!-- <ant-col span="18"></ant-col> -->
    </ant-row>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
  transition: opacity .5s;
  background: #fff;
  border-bottom: 1px solid #eee;
  height: 80px;
  margin-bottom: 24px;
  padding: 0 4%;
  width: 100%;

  .logo {
    float: left;
    height: 80px;
    line-height: 80px;

    img {
      width: 40px;
      height: 80px;
      margin-right: 8px;
      line-height: 80px;
    }

    span {
      float: right;
      font-size: 16px;
      font-family: Raleway,Hiragino Sans GB,sans-serif;
      height: 80px;
      line-height: 80px;
      text-transform: uppercase;
    }
  }
}
</style>
