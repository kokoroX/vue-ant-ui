## Timeline 时间轴

垂直展示的时间流信息。

## 何时使用

- 当有一系列信息需要从上至下按时间排列时；
- 需要有一条时间轴进行视觉上的串联时；

## 代码演示

<demo></demo>

<script>
import Demo from 'pages/timeline/demo'

export default {
  components: {
    Demo
  }
}
</script>

## API

```jsx
<ant-timeline>
  <ant-timeline-item>创建服务现场 2015-09-01</ant-timeline-item>
  <ant-timeline-item>初步排除网络异常 2015-09-01</ant-timeline-item>
  <ant-timeline-item>技术测试异常 2015-09-01</ant-timeline-item>
  <ant-timeline-item>网络异常正在修复 2015-09-01</ant-timeline-item>
</ant-timeline>
```

### Timeline

时间轴。

| 参数      | 说明                                     | 类型       | 默认值 |
|----------|----------------------------------------|------------|-------|
| pending  | 指定最后一个幽灵节点是否存在或内容 | boolean or React.Element | false  |

### TimelineItem

时间轴的每一个节点。

| 参数      | 说明                                     | 类型       | 默认值 |
|----------|------------------------------------------|------------|-------|
| color   | 指定圆圈颜色 `blue, red, green`，或自定义的色值 | string | blue  |
| dot   | 自定义时间轴点 | React.Element | -  |
