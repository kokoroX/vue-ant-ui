## Rate 评分

评分组件。

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 代码演示

<demo></demo>

<script>
import Demo from 'pages/rate/demo'

export default {
  components: {
    Demo
  }
}
</script>

## API

| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| count    | star 总数 | Number | 5 |
| value | 当前数，受控值 | Number | - |
| defaultValue | 默认值 | Number | 0 |
| onChange(value: Number) | 回调   | Function | - |
| allowHalf | 是否允许半选   | Boolean | false |
| disabled | 只读，无法进行交互 | Boolean | false |