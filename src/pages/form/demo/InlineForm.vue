<template lang="html">
  <div>
    <code-box id="components-form-demo-inline-form" title="平行排列" :code="code" :description="description">
      <div slot="instance">
        <ant-form inline :on-submit="handleSubmit">
          <ant-form-item label="账户" field-name="username">
            <ant-input placeholder="请输入账户名" id="username"></ant-input>
          </ant-form-item>
          <ant-form-item label="密码">
            <ant-input type="password" placeholder="请输入密码"></ant-input>
          </ant-form-item>
          <ant-form-item>
            <ant-checkbox>记住我</ant-checkbox>
          </ant-form-item>
          <ant-button type="primary" html-type="submit">登录</ant-button>
        </ant-form>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './inline-form.md'

export default {
  data: () => ({
    description,
    code: `
      <template lang="html">
        <div>
          <ant-form inline :on-submit="handleSubmit">
            <ant-form-item label="账户" field-name="username">
              <ant-input placeholder="请输入账户名" id="username"></ant-input>
            </ant-form-item>
            <ant-form-item label="密码">
              <ant-input type="password" placeholder="请输入密码"></ant-input>
            </ant-form-item>
            <ant-form-item>
              <ant-checkbox>记住我</ant-checkbox>
            </ant-form-item>
            <ant-button type="primary" html-type="submit">登录</ant-button>
          </ant-form>
        </div>
      </template>

      \<script\>
      export default {
        methods: {
          handleSubmit (e) {
            console.log(e)
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    handleSubmit (e) {
      console.log(e)
    }
  }
}
</script>
