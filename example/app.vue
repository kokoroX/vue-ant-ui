<template>
  <div class="code-box-demo">
    <div :style="{ marginBottom: '16px' }">
      <ant-button type="primary" @click="demo"
      >操 作</ant-button>
      <span :style="{ marginLeft: '8px' }">{{hasSelected ? `选择了 ${selectedRowKeys.length} 个对象` : ''}}</span>
    </div>
    <ant-table :columns="columns" :data-source="data" :row-selection="rowSelection" row-key="demo"></ant-table>
  </div>
</template>

<script>
  import { contains } from '_utils';
  import '../packages/style';
  import '../packages/table/style';
  import '../packages/pagination/style';
  // import '../packages/button/style';
  // import Pagination from 'vue-core-pagination';

  // const columns = [];

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      demo: i,
      name: `李大嘴${i}`,
      age: 32,
      address: `西湖区湖底公园${i}号`
    });
  }
  // 通过 rowSelection 对象表明需要行选择
  const rowSelection = {
    selectedRowKeys: [1, 5],
    onChange(selectedRowKeys, selectedRows) {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect(record, selected, selectedRows) {
      console.log(record, selected, selectedRows);
    },
    onSelectAll(selected, selectedRows, changeRows) {
      console.log(selected, selectedRows, changeRows);
    },
    getCheckboxProps: record => ({
      disabled: contains([1, 3, 5], record.key)
    })
  };

  export default {
    name: 'app',
    data() {
      return {
        columns: [
          {
            title: '序号',
            operation: true,
            width: 200,
            dataIndex: 'name',
            render: (value, b, $index) => ({
              template: '<ant-button :on-click="demo">123</ant-button>',
              methods: {
                demo() {
                  console.log(111);
                }
              }
            })
          }
          // {
          //   title: '姓名',
          //   dataIndex: 'name'
          // }, {
          //   title: '年龄',
          //   dataIndex: 'age'
          // }, {
          //   title: '住址',
          //   dataIndex: 'address'
          // }
        ],
        data,
        rowSelection,
        loading: false,
        selectedRowKeys: [],
        functions: {
          demo(value, $index) {
            console.log(value, $index);
          }
        }
      };
    },
    computed: {
      hasSelected() {
        return this.selectedRowKeys.length > 0;
      }
    },
    methods: {
      demo() {
        this.rowSelection.selectedRowKeys = [1, 9];
      },
      tem() {
        console.log(111);
      },
      start() {
        this.loading = true;
        // 模拟 ajax 请求，完成后清空
        setTimeout(() => {
          this.selectedRowKeys = [];
          this.loading = false;
        }, 1000);
      },
      onSelectChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys;
      }
    }
  };
</script>

<style lang="less">
.demo-row,
.code-box-demo .demo-row {
  background-image: linear-gradient(90deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%,  transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%,  transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
  overflow: hidden;
}
.ant-row-flex,
.code-box-demo .ant-row-flex {
  background: #F5F5F5;
}
.ant-row > div,
.code-box-demo .ant-row > div,
.ant-row-flex > div,
.code-box-demo .ant-row-flex > div {
  padding: 5px 0;
  text-align: center;
  border-radius: 6px;
  min-height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
}
.code-box-demo .ant-row > div:not(.gutter-row),
.code-box-demo .ant-row-flex > div:not(.gutter-row) {
  background: #6AC2F5;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.ant-row .demo-col,
.code-box-demo .ant-row .demo-col {
  text-align: center;
  padding: 40px 0;
  color: #fff;
  font-size: 18px;
  border: none;
  margin-top: 0;
  margin-bottom: 0;
}
.ant-row .demo-col-1,
.ant-row .demo-col-1 {
  background: rgba(29, 128, 211, 0.7);
}
.ant-row .demo-col-2,
.code-box-demo .ant-row .demo-col-2 {
  background: rgba(29, 128, 211, 0.5);
}
.ant-row .demo-col-3,
.code-box-demo .ant-row .demo-col-3{
  background: rgba(255, 255, 255, 0.2);
  color: #999;
}
.ant-row .demo-col-4,
.code-box-demo .ant-row .demo-col-4 {
  background: rgba(29, 128, 211, 0.6);
}
.ant-row .demo-col-5,
.code-box-demo .ant-row .demo-col-5 {
  background: rgba(255, 255, 255, 0.5);
  color: #999;
}
.code-box-demo .height-100 {
  height: 100px;
}
.code-box-demo .height-50 {
  height: 50px;
}
.code-box-demo .height-120 {
  height: 120px;
}
.code-box-demo .height-80 {
  height: 80px;
}
.gutter-box {
  background: #2db7f5;
  height: 80px;
  line-height: 80px;
  border-radius: 6px;
}
</style>
