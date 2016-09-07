<template lang="html">
  <div>
    <code-box id="components-form-demo-horizontal-form" title="典型表单" :code="code" :description="description">
      <div slot="instance">
        <ant-form horizontal :on-submit="handleSubmit">
          <ant-form-item label="用户名" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
            <p class="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
          </ant-form-item>
          <ant-form-item label="密码" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
            <ant-input type="password" placeholder="请输入密码"></ant-input>
          </ant-form-item>
          <ant-form-item label="您的性别" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
            <ant-radio-group default-value="female">
              <ant-radio value="male">男的</ant-radio>
              <ant-radio value="female">女的</ant-radio>
            </ant-radio-group>
          </ant-form-item>
          <ant-form-item label="备注" help="随便写点什么" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
            <ant-input type="textarea" placeholder="随便写"></ant-input>
          </ant-form-item>
          <ant-form-item :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
            <span slot="label">
              卖身华府
              <ant-tooltip title="我为秋香">
                <ant-icon type="question-circle-o"></ant-icon>
              </ant-tooltip>
            </span>
            <ant-checkbox>同意</ant-checkbox>
          </ant-form-item>
          <ant-form-item :wrapper-col="{ span: 16, offset: 6 }" style="margin-top: 24px;">
            <ant-button type="primary" html-type="submit">确定</ant-button>
          </ant-form-item>
        </ant-form>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './inline-form.md'

export default {
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    },
    formItemLayoutTwo: {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 }
    },
    description,
    code: `
      <template lang="html">
        <div>
          <ant-form horizontal :on-submit="handleSubmit">
            <ant-form-item label="用户名" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
              <p class="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
            </ant-form-item>
            <ant-form-item label="密码" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
              <ant-input type="password" placeholder="请输入密码"></ant-input>
            </ant-form-item>
            <ant-form-item label="您的性别" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
              <ant-radio-group default-value="female">
                <ant-radio value="male">男的</ant-radio>
                <ant-radio value="female">女的</ant-radio>
              </ant-radio-group>
            </ant-form-item>
            <ant-form-item label="备注" help="随便写点什么" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
              <ant-input type="textarea" placeholder="随便写"></ant-input>
            </ant-form-item>
            <ant-form-item :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
              <span slot="label">
                卖身华府
                <ant-tooltip title="我为秋香">
                  <ant-icon type="question-circle-o"></ant-icon>
                </ant-tooltip>
              </span>
              <ant-checkbox>同意</ant-checkbox>
            </ant-form-item>
            <ant-form-item :wrapper-col="{ span: 16, offset: 6 }" style="margin-top: 24px;">
              <ant-button type="primary" html-type="submit">确定</ant-button>
            </ant-form-item>
          </ant-form>
        </div>
      </template>

      \<script\>
      export default {
        data: () => ({
          formItemLayout: {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
          },
          formItemLayoutTwo: {
            labelCol: { span: 7 },
            wrapperCol: { span: 12 }
          }
        }),
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
