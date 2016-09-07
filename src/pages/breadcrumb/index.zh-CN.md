## Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## 代码演示

<demo></demo>

<script>
import Demo from 'pages/breadcrumb/demo'

export default {
  components: {
    Demo
  }
}
</script>

## API

```html
<ant-breadcrumb>
  <ant-breadcrumb-item>首页</ant-breadcrumb-item>
  <ant-breadcrumb-item>应用中心</ant-breadcrumb-item>
  <ant-breadcrumb-item>应用列表</ant-breadcrumb-item>
  <ant-breadcrumb-item>某应用</ant-breadcrumb-item>
</ant-breadcrumb>
```

| 参数      | 说明                              | 类型              |  可选值 | 默认值 |
|-----------|-----------------------------------|-----------------|---------|--------|
| routes    | router 的路由栈信息               | Array             |         | -      |
| params    | 路由的参数                        | Object            |         | -      |
| separator | 分隔符自定义                      | String or Element |         | '/'    |
| linkRender | 自定义链接函数，和 react-router 配置使用 | Function(href, name, paths) | | - |
| nameRender | 自定义文字函数，和 react-router 配置使用 | Function(breadcrumbName, route, params) | | - |
