<template lang="html">
  <div>
    <code-box id="components-tooltip-demo-placement" title="位置" :code="code" :description="description">
      <div slot="instance">
        <div style="margin-left: 60px;">
          <ant-tooltip placement="topLeft" :title="text">
            <a href="#">上左</a>
          </ant-tooltip>
          <ant-tooltip placement="top" :title="text">
            <a href="#">上边</a>
          </ant-tooltip>
          <ant-tooltip placement="topRight" :title="text">
            <a href="#">上右</a>
          </ant-tooltip>
        </div>
        <div style="width: 60px; float: left;">
          <ant-tooltip placement="leftTop" :title="text">
            <a href="#">左上</a>
          </ant-tooltip>
          <ant-tooltip placement="left" :title="text">
            <a href="#">左边</a>
          </ant-tooltip>
          <ant-tooltip placement="leftBottom" :title="text">
            <a href="#">左下</a>
          </ant-tooltip>
        </div>
        <div style="width: 60px; margin-left: 270px;">
          <ant-tooltip placement="rightTop" :title="text">
            <a href="#">右上</a>
          </ant-tooltip>
          <ant-tooltip placement="right" :title="text">
            <a href="#">右边</a>
          </ant-tooltip>
          <ant-tooltip placement="rightBottom" :title="text">
            <a href="#">右下</a>
          </ant-tooltip>
        </div>
        <div style="margin-left: 60px; clear: both;">
          <ant-tooltip placement="bottomLeft" :title="text">
            <a href="#">上右</a>
          </ant-tooltip>
          <ant-tooltip placement="bottom" :title="text">
            <a href="#">下边</a>
          </ant-tooltip>
          <ant-tooltip placement="bottomRight" :title="text">
            <a href="#">下右</a>
          </ant-tooltip>
        </div>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './basic.md'

export default {
  data: () => ({
    text: '提示文字',
    description,
    code: `
      <template lang="html">
        <div>
          <div style="margin-left: 60px;">
            <ant-tooltip placement="topLeft" :title="text">
              <a href="#">上左</a>
            </ant-tooltip>
            <ant-tooltip placement="top" :title="text">
              <a href="#">上边</a>
            </ant-tooltip>
            <ant-tooltip placement="topRight" :title="text">
              <a href="#">上右</a>
            </ant-tooltip>
          </div>
          <div style="width: 60px; float: left;">
            <ant-tooltip placement="leftTop" :title="text">
              <a href="#">左上</a>
            </ant-tooltip>
            <ant-tooltip placement="left" :title="text">
              <a href="#">左边</a>
            </ant-tooltip>
            <ant-tooltip placement="leftBottom" :title="text">
              <a href="#">左下</a>
            </ant-tooltip>
          </div>
          <div style="width: 60px; margin-left: 270px;">
            <ant-tooltip placement="rightTop" :title="text">
              <a href="#">右上</a>
            </ant-tooltip>
            <ant-tooltip placement="right" :title="text">
              <a href="#">右边</a>
            </ant-tooltip>
            <ant-tooltip placement="rightBottom" :title="text">
              <a href="#">右下</a>
            </ant-tooltip>
          </div>
          <div style="margin-left: 60px; clear: both;">
            <ant-tooltip placement="bottomLeft" :title="text">
              <a href="#">上右</a>
            </ant-tooltip>
            <ant-tooltip placement="bottom" :title="text">
              <a href="#">下边</a>
            </ant-tooltip>
            <ant-tooltip placement="bottomRight" :title="text">
              <a href="#">下右</a>
            </ant-tooltip>
          </div>
        </div>
      </template>

      \<script\>
      export default {
        data: () => ({
          text: '提示文字'
        })
      }
      \</script\>

      <style>
      #components-tooltip-demo-placement a {
          display: inline-block;
          line-height: 32px;
          height: 32px;
          width: 60px;
          font-size: 14px;
          text-align: center;
          background: #f5f5f5;
          margin-right: 1em;
          margin-bottom: 1em;
          border-radius: 6px;
      }
      </style>
    `
  })
}
</script>

<style>
#components-tooltip-demo-placement a {
    display: inline-block;
    line-height: 32px;
    height: 32px;
    width: 60px;
    font-size: 14px;
    text-align: center;
    background: #f5f5f5;
    margin-right: 1em;
    margin-bottom: 1em;
    border-radius: 6px;
}
</style>
