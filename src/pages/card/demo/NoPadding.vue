<template lang="html">
  <div>
    <code-box id="components-card-demo-no-padding" title="更灵活的内容展示" :code="code" :description="description">
      <div slot="instance">
        <ant-card style="width: 240px;" :body-style="{padding: 0}">
          <div class="custom-image">
            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          </div>
          <div class="custom-card">
            <h3>Europe Street beat</h3>
            <p>www.instagram.com</p>
          </div>
        </ant-card>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './no-padding.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-card style="width: 240;" :body-style="{padding: 0}">
          <div name="custom-image">
            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          </div>
          <div name="custom-card">
            <h3>Europe Street beat</h3>
            <p>www.instagram.com</p>
          </div>
        </ant-card>
      </div>

      <style scoped>
      .custom-image img {
        display: block;
      }
      .custom-card {
        padding: 10px 16px;
      }
      .custom-card p {
        color: #999;
      }
      </style>
    `
  })
}
</script>

<style scoped>
.custom-image img {
  display: block;
}
.custom-card {
  padding: 10px 16px;
}
.custom-card p {
  color: #999;
}
</style>
