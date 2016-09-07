<template lang="html">
  <div>
    <code-box id="components-form-demo-input-group" title="输入框组合" :code="code" :description="description">
      <div slot="instance">
        <ant-form horizontal>
          <ant-form-item label="标签输入框" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
            <ant-input addon-before="Http://" default-value="mysite.com" id="site1"></ant-input>
          </ant-form-item>

          <ant-form-item label="标签输入框" :label-col="{ span: 6 }" validate-status="success" :wrapper-col="{ span: 16 }">
            <ant-input addon-before="Http://" addon-after=".com" default-value="mysite" id="site2"></ant-input>
          </ant-form-item>

          <ant-form-item label="select 标签输入框" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
            <!-- <ant-input addon-after={selectAfter} placeholder="www.mysite" id="site4"></ant-input> -->
          </ant-form-item>

          <ant-form-item label="输入身份证" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
            <ant-input-group>
              <ant-col span="6">
              <ant-input id="certNo1"></ant-input>
            </ant-col>
              <ant-col span="6">
              <ant-input id="certNo2"></ant-input>
            </ant-col>
              <ant-col span="6">
              <ant-input id="certNo3"></ant-input>
            </ant-col>
              <ant-col span="6">
              <ant-input id="certNo4"></ant-input>
            </ant-col>
            </ant-input-group>
          </ant-form-item>

          <ant-form-item label="电话号码" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
            <ant-input-group>
              <ant-col span="4">
              <ant-input id="tel1" default-value="086"></ant-input>
            </ant-col>
              <ant-col span="2">
              <p class="ant-form-split">--</p>
            </ant-col>
              <ant-col span="6">
              <ant-input id="tel1"></ant-input>
            </ant-col>
              <ant-col span="6">
              <ant-input id="tel2"></ant-input>
            </ant-col>
              <ant-col span="6">
              <ant-input id="tel3"></ant-input>
            </ant-col>
            </ant-input-group>
          </ant-form-item>
        </ant-form>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './input-group.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-form horizontal>
          <ant-form-item label="标签输入框" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
            <ant-input addon-before="Http://" default-value="mysite.com" id="site1"></ant-input>
          </ant-form-item>

          <ant-form-item label="标签输入框" :label-col="{ span: 6 }" validate-status="success" :wrapper-col="{ span: 16 }">
            <ant-input addon-before="Http://" addon-after=".com" default-value="mysite" id="site2"></ant-input>
          </ant-form-item>

          <ant-form-item label="select 标签输入框" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
            <!-- <ant-input addon-after={selectAfter} placeholder="www.mysite" id="site4"></ant-input> -->
          </ant-form-item>

          <ant-form-item label="输入身份证" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
            <ant-input-group>
              <ant-col span="6">
              <ant-input id="certNo1"></ant-input>
            </ant-col>
              <ant-col span="6">
              <ant-input id="certNo2"></ant-input>
            </ant-col>
              <ant-col span="6">
              <ant-input id="certNo3"></ant-input>
            </ant-col>
              <ant-col span="6">
              <ant-input id="certNo4"></ant-input>
            </ant-col>
            </ant-input-group>
          </ant-form-item>

          <ant-form-item label="电话号码" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
            <ant-input-group>
              <ant-col span="4">
              <ant-input id="tel1" default-value="086"></ant-input>
            </ant-col>
              <ant-col span="2">
              <p class="ant-form-split">--</p>
            </ant-col>
              <ant-col span="6">
              <ant-input id="tel1"></ant-input>
            </ant-col>
              <ant-col span="6">
              <ant-input id="tel2"></ant-input>
            </ant-col>
              <ant-col span="6">
              <ant-input id="tel3"></ant-input>
            </ant-col>
            </ant-input-group>
          </ant-form-item>
        </ant-form>
      </div>
    `
  })
}
</script>
