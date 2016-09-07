## Card 卡片

通用卡片容器。

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 代码演示

<demo></demo>

<script>
import Demo from 'pages/card/demo'

export default {
  components: {
    Demo
  }
}
</script>

## API

```html
<ant-card title="卡片标题">卡片内容</ant-card>
```

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| title    | 卡片标题 | React.Element   |  -  |
| extra    | 卡片右上角的操作区域 | React.Element   | - |
| bordered | 是否有边框 | Boolean   |  true  |
| bodyStyle | 内容区域自定义样式 | Object   |  -  |
