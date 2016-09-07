<template lang="html">
  <div>
    <code-box id="components-table-demo-basic" title="基本用法" :code="code" :description="description">
      <div slot="instance">
        <ant-table :columns="columns" :data-source="data"></ant-table>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './basic.md'

const data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}]

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  render: (text) => `<a href="#">${text}</a>`
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '住址',
  dataIndex: 'address'
}, {
  title: '操作',
  operation: true,
  render: (text, record) => (
    `<span>
      <a href="#">操作一${record.name}</a>
      <span className="ant-divider"></span>
      <a href="#">操作二</a>
      <span className="ant-divider"></span>
      <a href="#" className="ant-dropdown-link">
        更多 <ant-icon type="down"></ant-icon>
      </a>
    </span>`
  )
}]

export default {
  data: () => ({
    description,
    code: `
      <template lang="html">
        <div slot="instance">
          <ant-table :columns="columns" :data-source="data"></ant-table>
        </div>
      </template>

      \<script\>
      const data = [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }, {
        key: '3',
        name: '李大嘴',
        age: 32,
        address: '西湖区湖底公园1号'
      }]

      const columns = [{
        title: '姓名',
        dataIndex: 'name',
        render: (text) => \`<a href="#">\${text}</a>\`
      }, {
        title: '年龄',
        dataIndex: 'age'
      }, {
        title: '住址',
        dataIndex: 'address'
      }, {
        title: '操作',
        operation: true,
        render: (text, record) => (
          \`<span>
            <a href="#">操作一\${record.name}</a>
            <span className="ant-divider"></span>
            <a href="#">操作二</a>
            <span className="ant-divider"></span>
            <a href="#" className="ant-dropdown-link">
              更多 <ant-icon type="down"></ant-icon>
            </a>
          </span>\`
        )
      }]

      export default {
        data: () => ({
          data,
          columns
        })
      }
      \</script\>
    `,
    data,
    columns
  })
}
</script>
