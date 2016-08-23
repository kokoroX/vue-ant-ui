<template lang="html">
  <div style="margin-top: 50px; margin-left: 50px;">
    <ant-tooltip title="提示文字">
      <span>鼠标移上来就会出现提示</span>
    </ant-tooltip>

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
      <div style={{ width: 60, float: 'left' }}>
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
      <div style={{ width: 60, marginLeft: 270 }}>
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
      <div style={{ marginLeft: 60, clear: 'both' }}>
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
  </div>
</template>

<script>
export default {
  data: () => ({
    text: '提示文字'
  })
};
</script>
