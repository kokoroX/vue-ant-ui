<template lang="html">
  <div class="code-box-demo">
    <ant-card style="width: 300;">
      <template slot="title">Card title</template>
      <a href="#" slot="extra">More</a>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </ant-card>

    <div style="background: #ECECEC; padding: 30px;">
      <ant-card :bordered="false"  style="width: 300;">
        <template slot="title">Card title</template>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </ant-card>
    </div>

    <ant-card style="width: 300;">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </ant-card>

    <ant-card style="width: 240;" :body-style="{padding: 0}">
      <div name="custom-image">
        <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
      </div>
      <div name="custom-card">
        <h3>Europe Street beat</h3>
        <p>www.instagram.com</p>
      </div>
    </ant-card>

    <div style="background: #ECECEC; padding: 30px;">
      <ant-row>
        <ant-col span="8">
          <ant-card :bordered="false">
            <template slot="title">Card title</template>
            Card content
          </ant-card>
        </ant-col>
        <ant-col span="8">
          <ant-card :bordered="false">
            <template slot="title">Card title</template>
            Card content
          </ant-card>
        </ant-col>
        <ant-col span="8">
          <ant-card :bordered="false">
            <template slot="title">Card title</template>
            Card content
          </ant-card>
        </ant-col>
      </ant-row>
    </div>

    <ant-card loading style="width: 34%;">
      <template slot="title">Card title</template>
      Whatever content
    </ant-card>
  </div>
</template>

<script>
export default {}
</script>

<style>
.custom-image img {
  display: block;
}
.custom-card {
  padding: 10px 16px;
}
.custom-card p {
  color: #999;
}
.code-box-demo .ant-row {
  margin-left: -8px;
  margin-right: -8px;
}
.code-box-demo .ant-row > div {
  padding: 0 8px;
}
</style>
