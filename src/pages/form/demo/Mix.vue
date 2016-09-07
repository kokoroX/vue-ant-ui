<template lang="html">
  <div>
    <code-box id="components-form-demo-mix" title="表单组合" :code="code" :description="description">
      <div slot="instance">
        <ant-form horizontal :on-submit="handleSubmit" >
          <ant-form-item
            label="InputNumber 数字输入框"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 10 }"
          >
            <ant-input-number :min="1" :max="10" style="width: 100px;" :default-value="3"/></ant-input-number>
            <span class="ant-form-text"> 台机器</span>
          </ant-form-item>

          <ant-form-item
            label="我是标题"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 10 }"
          >
            <p class="ant-form-text" id="static" name="static">唧唧复唧唧木兰当户织呀</p>
            <p class="ant-form-text">
              <a href="#">链接文字</a>
            </p>
          </ant-form-item>

          <ant-form-item
            label="Switch 开关"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 10 }"
            required
          >
            <ant-switch></ant-switch>
          </ant-form-item>

          <ant-form-item
            label="Slider 滑动输入条"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 10 }"
            required
          >
            <!-- <ant-slider marks={['A', 'B', 'C', 'D', 'E', 'F', 'G']} {...getFieldProps('slider')}></ant-slider> -->
          </ant-form-item>

          <ant-form-item
            label="Select 选择器"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            required
          >
            <!-- <Select style={{ width: 200 }}
              {...getFieldProps('select')}
            >
              <Option value="jack">jack</Option>
              <Option value="lucy">lucy</Option>
              <Option value="disabled" disabled>disabled</Option>
              <Option value="yiminghe">yiminghe</Option>
            </Select> -->
          </ant-form-item>

          <ant-form-item
            label="级联选择"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            required
            has-feedback
          >
            <!-- <Cascader style={{ width: 200 }} options={areaData} {...getFieldProps('area')} /> -->
          </ant-form-item>

          <ant-form-item
            label="DatePicker 日期选择框"
            :label-col="{ span: 8 }"
            required
          >
            <ant-col span="6">
              <ant-form-item>
                <!-- <DatePicker {...getFieldProps('startDate')} /> -->
              </ant-form-item>
            </ant-col>
            <ant-col span="1">
              <p class="ant-form-split">-</p>
            </ant-col>
            <ant-col span="6">
              <ant-form-item>
                <!-- <DatePicker {...getFieldProps('endDate')} /> -->
              </ant-form-item>
            </ant-col>
          </ant-form-item>


          <ant-form-item
            label="TimePicker 时间选择器"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            required
          >
            <!-- <TimePicker {...getFieldProps('time')} /> -->
          </ant-form-item>

          <ant-form-item
            label="选项"
            :label-col="{ span: 8 }"
          >
            <ant-radio-group :default-value>
              <ant-radio-button value="a">选项一</ant-radio-button>
              <ant-radio-button value="b">选项二</ant-radio-button>
              <ant-radio-button value="c">选项三</ant-radio-button>
            </ant-radio-group>
          </ant-form-item>

          <ant-form-item
            label="logo图"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            help="提示信息要长长长长长长长长长长长长长长"
          >
            <!-- <Upload name="logo" action="/upload.do" listType="picture" onChange={this.handleUpload}
              {...getFieldProps('upload', {
                valuePropName: 'fileList',
                normalize: this.normFile,
              })}
            >
              <ant-button type="ghost">
                <Icon type="upload" /> 点击上传
              </ant-button>
            </Upload> -->
          </ant-form-item>

          <ant-form-item :wrapper-col="{ span: 16, offset: 8 }" style="{ marginTop: 24 }">
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
    description,
    code: `
      <template lang="html">
        <div>
          <ant-form horizontal :on-submit="handleSubmit" >
            <ant-form-item
              label="InputNumber 数字输入框"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 10 }"
            >
              <ant-input-number :min="1" :max="10" style="width: 100px;" :default-value="3"/></ant-input-number>
              <span class="ant-form-text"> 台机器</span>
            </ant-form-item>

            <ant-form-item
              label="我是标题"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 10 }"
            >
              <p class="ant-form-text" id="static" name="static">唧唧复唧唧木兰当户织呀</p>
              <p class="ant-form-text">
                <a href="#">链接文字</a>
              </p>
            </ant-form-item>

            <ant-form-item
              label="Switch 开关"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 10 }"
              required
            >
              <ant-switch></ant-switch>
            </ant-form-item>

            <ant-form-item
              label="Slider 滑动输入条"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 10 }"
              required
            >
              <!-- <ant-slider marks={['A', 'B', 'C', 'D', 'E', 'F', 'G']} {...getFieldProps('slider')}></ant-slider> -->
            </ant-form-item>

            <ant-form-item
              label="Select 选择器"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
              required
            >
              <!-- <Select style={{ width: 200 }}
                {...getFieldProps('select')}
              >
                <Option value="jack">jack</Option>
                <Option value="lucy">lucy</Option>
                <Option value="disabled" disabled>disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select> -->
            </ant-form-item>

            <ant-form-item
              label="级联选择"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
              required
              has-feedback
            >
              <!-- <Cascader style={{ width: 200 }} options={areaData} {...getFieldProps('area')} /> -->
            </ant-form-item>

            <ant-form-item
              label="DatePicker 日期选择框"
              :label-col="{ span: 8 }"
              required
            >
              <ant-col span="6">
                <ant-form-item>
                  <!-- <DatePicker {...getFieldProps('startDate')} /> -->
                </ant-form-item>
              </ant-col>
              <ant-col span="1">
                <p class="ant-form-split">-</p>
              </ant-col>
              <ant-col span="6">
                <ant-form-item>
                  <!-- <DatePicker {...getFieldProps('endDate')} /> -->
                </ant-form-item>
              </ant-col>
            </ant-form-item>

            <ant-form-item
              label="TimePicker 时间选择器"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
              required
            >
              <!-- <TimePicker {...getFieldProps('time')} /> -->
            </ant-form-item>

            <ant-form-item
              label="选项"
              :label-col="{ span: 8 }"
            >
              <ant-radio-group :default-value>
                <ant-radio-button value="a">选项一</ant-radio-button>
                <ant-radio-button value="b">选项二</ant-radio-button>
                <ant-radio-button value="c">选项三</ant-radio-button>
              </ant-radio-group>
            </ant-form-item>

            <ant-form-item
              label="logo图"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
              help="提示信息要长长长长长长长长长长长长长长"
            >
              <!-- <Upload name="logo" action="/upload.do" listType="picture" onChange={this.handleUpload}
                {...getFieldProps('upload', {
                  valuePropName: 'fileList',
                  normalize: this.normFile,
                })}
              >
                <ant-button type="ghost">
                  <Icon type="upload" /> 点击上传
                </ant-button>
              </Upload> -->
            </ant-form-item>

            <ant-form-item :wrapper-col="{ span: 16, offset: 8 }" style="{ marginTop: 24 }">
              <ant-button type="primary" html-type="submit">确定</ant-button>
            </ant-form-item>
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
