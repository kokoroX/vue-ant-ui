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



    <ant-form horizontal>
      <ant-form-item label="失败校验" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" validate-status="error" help="请输入数字和字母组合">
        <ant-input default-value="无效选择" id="error"></ant-input>
      </ant-form-item>

      <ant-form-item label="警告校验" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" validate-status="warning">
        <ant-input default-value="前方高能预警" id="warning"></ant-input>
      </ant-form-item>

      <ant-form-item label="校验中" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" has-feedback validate-status="validating" help="信息审核中...">
        <ant-input default-value="我是被校验的内容" id="validating"></ant-input>
      </ant-form-item>

      <ant-form-item label="成功校验" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" has-feedback validate-status="success">
        <ant-input default-value="我是正文" id="success"></ant-input>
      </ant-form-item>

      <ant-form-item label="警告校验" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" has-feedback validate-status="warning">
        <ant-input default-value="前方高能预警" id="warning"></ant-input>
      </ant-form-item>

      <ant-form-item label="失败校验" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" has-feedback validate-status="error" help="请输入数字和字母组合">
        <ant-input default-value="无效选择" id="error"></ant-input>
      </ant-form-item>

      <ant-form-item label="行内校验" :label-col="{ span: 5 }" help>
        <ant-col span="6">
        <ant-form-item validate-status="error" help="请选择正确日期">
          <!-- <DatePicker /> -->
        </ant-form-item>
      </ant-col>
        <ant-col span="1">
        <p class="ant-form-split">-</p>
      </ant-col>
        <ant-col span="6">
        <ant-form-item>
          <!-- <DatePicker /> -->
        </ant-form-item>
      </ant-col>
      </ant-form-item>
    </ant-form>



    <ant-form horizontal class="ant-advanced-search-form">
      <ant-row :gutter="16">
        <ant-col :sm="8">
          <ant-form-item
            label="搜索名称"
            :label-col="{ span: 10 }"
            :wrapper-col="{ span: 14 }"
          >
            <ant-input placeholder="请输入搜索名称" size="default"></ant-input>
          </ant-form-item>
          <ant-form-item
            label="较长搜索名称"
            :label-col="{ span: 10 }"
            :wrapper-col="{ span: 14 }"
          >
            <!-- <DatePicker size="default" /> -->
          </ant-form-item>
          <ant-form-item
            label="搜索名称"
            :label-col="{ span: 10 }"
            :wrapper-col="{ span: 14 }"
          >
            <ant-input placeholder="请输入搜索名称" size="default"></ant-input>
          </ant-form-item>
        </ant-col>
        <ant-col :sm="8">
          <ant-form-item
            label="搜索名称"
            :label-col="{ span: 10 }"
            :wrapper-col="{ span: 14 }"
          >
            <ant-input placeholder="请输入搜索名称" size="default"></ant-input>
          </ant-form-item>
          <ant-form-item
            label="较长搜索名称"
            :label-col="{ span: 10 }"
            :wrapper-col="{ span: 14 }"
          >
            <!-- <DatePicker size="default" /> -->
          </ant-form-item>
          <ant-form-item
            label="搜索名称"
            :label-col="{ span: 10 }"
            :wrapper-col="{ span: 14 }"
          >
            <ant-input placeholder="请输入搜索名称" size="default"></ant-input>
          </ant-form-item>
        </ant-col>
        <ant-col :sm="8">
          <ant-form-item
            label="搜索名称"
            :label-col="{ span: 10 }"
            :wrapper-col="{ span: 14 }"
          >
            <ant-input placeholder="请输入搜索名称" size="default"></ant-input>
          </ant-form-item>
          <ant-form-item
            label="较长搜索名称"
            :label-col="{ span: 10 }"
            :wrapper-col="{ span: 14 }"
          >
            <!-- <DatePicker size="default" /> -->
          </ant-form-item>
          <ant-form-item
            label="搜索名称"
            :label-col="{ span: 10 }"
            :wrapper-col="{ span: 14 }"
          >
            <ant-input placeholder="请输入搜索名称" size="default"></ant-input>
          </ant-form-item>
        </ant-col>
      </ant-row>
      <ant-row>
        <ant-col :span="12" :offset="12" style="text-align: right;">
          <ant-button type="primary" html-type="submit">搜索</ant-button>
          <ant-button>清除条件</ant-button>
        </ant-col>
      </ant-row>
    </ant-form>



    <ant-form horizontal form={this.props.form}>
      <ant-form-item
        label="用户名"
        has-feedback
        :label-col="formItemLayoutTwo.labelCol"
        :wrapper-col="formItemLayoutTwo.wrapperCol"
        help="isFieldValidating('name') ? '校验中...' : (getFieldError('name') || []).join(', ')"}
      >
        <ant-input placeholder="实时校验，输入 JasonWood 看看"></ant-input>
      </ant-form-item>

      <ant-form-item
        :label-col="formItemLayoutTwo.labelCol"
        :wrapper-col="formItemLayoutTwo.wrapperCol"
        label="邮箱"
        has-feedback
      >
        <ant-input {...emailProps} type="email" placeholder="onBlur 与 onChange 相结合"></ant-input>
      </ant-form-item>

      <ant-form-item
        :label-col="formItemLayoutTwo.labelCol"
        :wrapper-col="formItemLayoutTwo.wrapperCol"
        label="密码"
        has-feedback
      >
        <!-- <ant-input type="password" auto-complete="off"
          onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
       ></ant-input> -->
      </ant-form-item>

      <ant-form-item
        :label-col="formItemLayoutTwo.labelCol"
        :wrapper-col="formItemLayoutTwo.wrapperCol"
        label="确认密码"
        has-feedback
      >
        <!-- <ant-input {...rePasswdProps} type="password" autoComplete="off" placeholder="两次输入密码保持一致"
          onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
       ></ant-input> -->
      </ant-form-item>

      <ant-form-item
        :label-col="formItemLayoutTwo.labelCol"
        :wrapper-col="formItemLayoutTwo.wrapperCol"
        label="备注"
      >
        <ant-input type="textarea" placeholder="随便写" id="textarea" name="textarea"></ant-input>
      </ant-form-item>

      <ant-form-item :wrapper-col="{ span: 12, offset: 7 }">
        <ant-button type="primary" :on-click="handleSubmit">确定</ant-button>
        &nbsp;&nbsp;&nbsp;
        <ant-button type="ghost" :on-click="handleReset">重置</ant-button>
      </ant-form-item>
    </ant-form>
  </div>
</template>

<script>
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
    handleSubmit(e) {
      console.log(e);
    }
  }
};
</script>

<style>
/* 定制样式 */

.ant-advanced-search-form {
  padding: 16px 8px;
  background: #f8f8f8;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
}

/* 由于输入标签长度不确定，所以需要微调使之看上去居中 */
.ant-advanced-search-form > .ant-row {
  position: relative;
  left: -6px;
}

.ant-advanced-search-form .ant-btn + .ant-btn {
  margin-left: 8px;
}
</style>
