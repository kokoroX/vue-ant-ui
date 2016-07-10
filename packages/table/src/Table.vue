<template lang="html">
  <div class="clearfix">
    <div class="">
      <div class="ant-spin"><span class="ant-spin-dot"></span>
          <div class="ant-spin-text">加载中...</div>
      </div>
      <div class="ant-spin-container">
        <div>
          <div class="ant-table ant-table-large ant-table-scroll-position-left">
            <div class="">
              <span>
                <div class="ant-table-body">
                  <table class="">
                    <colgroup>
                      <col v-for="column in columns">
                    </colgroup>
                    <thead class="ant-table-thead">
                      <tr class="ant-table-row  ant-table-row-level-0">
                        <th class="ant-table-selection-column">
                          <span>
                            <checkbox :checked="selectedAllRow" :on-change="handleSelectAllRow"></checkbox>
                          </span>
                        </th>
                        <th class="" v-for="column in columns">
                          <span>{{ column.title }}</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="ant-table-tbody">
                      <tr class="ant-table-row  ant-table-row-level-0" v-for="($index, row) in currentPageData">
                        <td class="ant-table-selection-column">
                          <span>
                            <checkbox :checked="selectedRowKeys.indexOf(row.key) >= 0" :on-change="handleSelect(row, $index)"></checkbox>
                          </span>
                        </td>
                        <td class="" v-for="($index, column) in columns">
                          <span class="ant-table-row-indent indent-level-0" style="padding-left: 0px;"></span>
                          {{{ column.render ? column.render(row[column.dataIndex], row, $index) : row[column.dataIndex] }}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pagination class="ant-table-pagination" :current="pagination.current" :total="dataSource.length" :on-change="handlePageChange"></pagination>
  </div>
</template>

<script>
  import { curryingContains } from '../../_utils';

  export default {
    name: 'ant-table',

    props: {
      rowSelection: Object,
      pagination: {
        type: Object,
        default: () => ({
          current: 1,
          pageSize: 10,
          onChange: () => {},
          onShowSizeChange: () => {}
        })
      },
      size: {
        type: String,
        validator: curryingContains(['default', 'small'])
      },
      dataSource: Array,
      columns: Array,
      rowKey: {
        type: [String, Function],
        default: 'key'
      },
      rowClassName: Function,
      expandedRowRender: Function,
      defaultExpandedRowKeys: Array,
      expandedRowKeys: Array,
      onChange: Function,
      loading: {
        type: Boolean
      },
      locale: {
        type: Object,
        default: () => ({
          filterConfirm: '确定',
          filterReset: '重置',
          emptyText: '暂无数据'
        })
      },
      indentSize: {
        type: Number,
        default: 15
      },
      onRowClick: Function,
      useFixedHeader: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      footer: Function,
      scroll: Object

      // Columns相关
      // title: String,
      // key: String,
      // dataIndex: String,
      // render: Function,
      // filters: Array,
      // onFilter: Function,
      // filterMultiple: {
      //   type: Boolean,
      //   default: true
      // },
      // // filterDropdown:
      // sorter: Function,
      // colSpan: Number,
      // width: [String, Number],
      // className: String,
      // fixed: {
      //   type: [Boolean, String],
      //   default: false,
      //   validator: curryingContains([true, false, 'left', 'right', undefined])
      // },
      // filterenValue: Array,
      // sortOrder: curryingContains([true, false, 'ascend', 'descend'])

      // rowSelection相关
      // type: {
      //   type: String,
      //   default: 'checkbox',
      //   validator: (['checkbox', 'radio', undefined])
      // },
      // selectedRowKeys: Array,
      // onChange: Function,
      // getCheckboxProps: Function,
      // onSelect: Function,
      // onSelectAll: Function
    },
    data() {
      return {
        selectedRowKeys: []
      };
    },
    watch: {
      'rowSelection.selectedRowKeys'(value) {
        this.selectedRowKeys = value;
      },
      selectedRowKeys(value) {
        if (this.rowSelection && this.rowSelection.onChange) {
          const selectedRows = this.dataSource.filter(
            (row, i) => value.indexOf(row.key) >= 0
          );
          this.rowSelection.onChange(value, selectedRows);
        }
      }
    },
    computed: {
      currentPageData() {
        let data = this.dataSource;
        let current;
        let pageSize;
        if (!this.pagination) {
          pageSize = Number.MAX_VALUE;
          current = 1;
        } else {
          pageSize = this.pagination.pageSize;
          current = this.pagination.current;
        }

        if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
          data = data.filter((item, i) => {
            return i >= (current - 1) * pageSize && i < current * pageSize;
          });
        }
        return data;
      },
      selectedAllRow() {
        const selectedRowKeys = this.selectedRowKeys;
        const currentPageSelectedRow = this.currentPageData.filter(
          (row, i) => selectedRowKeys.indexOf(row.key) >= 0
        );
        return currentPageSelectedRow.length === this.pagination.pageSize;
      }
    },
    compiled() {
      this.selectedRowKeys = (this.rowSelection || {}).selectedRowKeys || [];
    },
    methods: {
      handleSelect(record, rowIndex) {
        return (e) => {
          const checked = e.target.checked;
          const data = this.currentPageData;
          const selectedRowKeys = this.selectedRowKeys;

          if (checked) {
            selectedRowKeys.push(record.key);
          } else {
            selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
          }

          if (!this.rowSelection.onSelect) return false;
          let selectedRows = data.filter((row, i) => {
            return selectedRowKeys.indexOf(row.key) >= 0;
          });
          this.rowSelection.onSelect(record, checked, selectedRows);
        };
      },
      handleSelectAllRow(e) {
        const checked = e.target.checked;
        const data = this.currentPageData;
        const selectedRowKeys = this.selectedRowKeys;

        const changeRowKeys = [];
        if (checked) {
          data.map(item => item.key).forEach(key => {
            if (selectedRowKeys.indexOf(key) < 0) {
              selectedRowKeys.push(key);
              changeRowKeys.push(key);
            }
          });
        } else {
          data.map(item => item.key).forEach(key => {
            if (selectedRowKeys.indexOf(key) >= 0) {
              selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
              changeRowKeys.push(key);
            }
          });
        }
        if (this.rowSelection.onSelectAll) {
          const selectedRows = data.filter((row, i) =>
            selectedRowKeys.indexOf(row.key) >= 0);
          const changeRows = data.filter((row, i) =>
            changeRowKeys.indexOf(row.key) >= 0);
          this.rowSelection.onSelectAll(checked, selectedRows, changeRows);
        }
      },
      handlePageChange(current) {
        let pagination = this.pagination;
        pagination.current = current;
        pagination.onChange(pagination.current);
      }
    }
  };
</script>

<style lang="scss">
</style>
