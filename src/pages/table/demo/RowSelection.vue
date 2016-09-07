<template lang="html">
  <div>
    <code-box id="components-table-demo-row-selection" title="可选择" :code="code" :description="description">
      <div slot="instance">
        <ant-table :columns="columns" :data-source="data" :row-selection="rowSelection"></ant-table>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './basic.md'

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  render: text => `<a href="#">${text}</a>`
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '住址',
  dataIndex: 'address'
}]
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

      export default {
        data: () => ({
          data,
          columns: [{
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
        })
      }
      \</script\>
    `,
    data,
    columns,
    rowSelection: {
      onChange (selectedRowKeys, selectedRows) {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
      },
      onSelect (record, selected, selectedRows) {
        console.log(record, selected, selectedRows)
      },
      onSelectAll (selected, selectedRows, changeRows) {
        console.log(selected, selectedRows, changeRows)
      }
    }
  })
}
</script>
