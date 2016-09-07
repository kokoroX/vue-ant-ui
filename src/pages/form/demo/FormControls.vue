<template lang="html">
  <div>
    <code-box id="components-form-demo-horizontal-form" title="表单控件" :code="code" :description="description">
      <div slot="instance">
        <ant-form horizontal>
          <ant-form-item label="输入框" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
            <ant-input id="control-input" placeholder="Please enter..."></ant-input>
          </ant-form-item>

          <ant-form-item label="文本域" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
            <ant-input type="textarea" id="control-textarea" rows="3"></ant-input>
          </ant-form-item>

          <ant-form-item id="select" label="Select 选择器" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
            <!-- <Select id="select" size="large" default-value="lucy" style={{ width: 200 }} onChange={handleSelectChange}>
              <Option value="jack">jack</Option>
              <Option value="lucy">lucy</Option>
              <Option value="disabled" disabled>disabled</Option>
              <Option value="yiminghe">yiminghe</Option>
            </Select> -->
          </ant-form-item>

          <ant-form-item label="Checkbox 多选框" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
            <ant-checkbox class="ant-checkbox-vertical">选项一</ant-checkbox>
            <ant-checkbox class="ant-checkbox-vertical">选项二</ant-checkbox>
            <ant-checkbox class="ant-checkbox-vertical" disabled>选项三（不可选）</ant-checkbox>
          </ant-form-item>

          <ant-form-item label="Checkbox 多选框" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
            <ant-checkbox class="ant-checkbox-inline">选项一</ant-checkbox>
            <ant-checkbox class="ant-checkbox-inline">选项二</ant-checkbox>
            <ant-checkbox class="ant-checkbox-inline">选项三</ant-checkbox>
          </ant-form-item>

          <ant-form-item label="Radio 单选框" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
            <ant-radio-group default-value="b">
              <ant-radio value="a">A</ant-radio>
              <ant-radio value="b">B</ant-radio>
              <ant-radio value="c">C</ant-radio>
              <ant-radio value="d">D</ant-radio>
            </ant-radio-group>
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
    description,
    code: `
      <div>
        <ant-form horizontal>
          <ant-form-item label="输入框" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
            <ant-input id="control-input" placeholder="Please enter..."></ant-input>
          </ant-form-item>

          <ant-form-item label="文本域" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
            <ant-input type="textarea" id="control-textarea" rows="3"></ant-input>
          </ant-form-item>

          <ant-form-item id="select" label="Select 选择器" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }">
            <!-- <Select id="select" size="large" default-value="lucy" style={{ width: 200 }} onChange={handleSelectChange}>
              <Option value="jack">jack</Option>
              <Option value="lucy">lucy</Option>
              <Option value="disabled" disabled>disabled</Option>
              <Option value="yiminghe">yiminghe</Option>
            </Select> -->
          </ant-form-item>

          <ant-form-item label="Checkbox 多选框" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
            <ant-checkbox class="ant-checkbox-vertical">选项一</ant-checkbox>
            <ant-checkbox class="ant-checkbox-vertical">选项二</ant-checkbox>
            <ant-checkbox class="ant-checkbox-vertical" disabled>选项三（不可选）</ant-checkbox>
          </ant-form-item>

          <ant-form-item label="Checkbox 多选框" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
            <ant-checkbox class="ant-checkbox-inline">选项一</ant-checkbox>
            <ant-checkbox class="ant-checkbox-inline">选项二</ant-checkbox>
            <ant-checkbox class="ant-checkbox-inline">选项三</ant-checkbox>
          </ant-form-item>

          <ant-form-item label="Radio 单选框" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
            <ant-radio-group default-value="b">
              <ant-radio value="a">A</ant-radio>
              <ant-radio value="b">B</ant-radio>
              <ant-radio value="c">C</ant-radio>
              <ant-radio value="d">D</ant-radio>
            </ant-radio-group>
          </ant-form-item>
        </ant-form>
      </div>
    `
  })
}
</script>
