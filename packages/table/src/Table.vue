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
                      <col v-if="!isEmptyObject(rowSelection)">
                      <col v-for="column in columns" :style="{ width: `${column.width}px` }">
                    </colgroup>
                    <thead class="ant-table-thead">
                      <tr class="ant-table-row  ant-table-row-level-0">
                        <th class="ant-table-selection-column" v-if="!isEmptyObject(rowSelection)">
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
                      <tr class="ant-table-row  ant-table-row-level-0" v-for="($rowIndex, row) in currentPageData">
                        <td class="ant-table-selection-column" v-if="!isEmptyObject(rowSelection)">
                          <span>
                            <checkbox :checked="selectedRowKeys.indexOf(row[rowKey]) >= 0" :disabled="getCheckboxPropsByItem(row).disabled" :on-change="handleSelect(row, $rowIndex)"></checkbox>
                          </span>
                        </td>
                        <td class="" v-for="($columnIndex, column) in columns">
                          <span class="ant-table-row-indent indent-level-0" style="padding-left: 0px;"></span>
                          <template v-if='column.operation'>
                            <span v-make="column.render(row[column.dataIndex], row, $rowIndex)"></span>
                          </template>
                          <template v-else>
                            {{{ column.render ? column.render(row[column.dataIndex], row, $rowIndex) : row[column.dataIndex] }}}
                          </template>
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
    <ant-pagination class="ant-table-pagination" :current="pagination.current" :total="pagination.totalCount" :page-size="pagination.pageSize" :on-change="handlePageChange" v-if="pagination"></ant-pagination>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { curryingContains } from '../../_utils';

  export default {
    name: 'ant-table',

    props: {
      rowSelection: {
        type: Object,
        default: () => ({})
      },
      pagination: {
        type: [Object, Boolean],
        default: () => ({
          current: 1,
          pageSize: 10,
          totalCount: 1,
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
          (row, i) => selectedRowKeys.indexOf(this.getRecordKey(row)) >= 0
        );
        return currentPageSelectedRow.length === this.pagination.pageSize;
      }
    },
    compiled() {
      this.selectedRowKeys = (this.rowSelection || {}).selectedRowKeys || [];
    },
    methods: {
      getRecordKey(record, index) {
        if (this.rowKey) {
          return typeof this.rowKey === 'function' ? this.rowKey(record, index) : record[this.rowKey];
        }
        return record.key || index;
      },
      isEmptyObject(obj) {
        /* eslint-disable no-unused-vars */
        var o;
        for (o in obj) return !1;
        return !0;
      },
      getCheckboxPropsByItem(item) {
        const { rowSelection = {} } = this;
        if (!rowSelection.getCheckboxProps) {
          return {};
        }
        // const key = this.getRecordKey(item);
        return rowSelection.getCheckboxProps(item);
      },
      handleSelect(record, rowIndex) {
        return (e) => {
          const checked = e.target.checked;
          const data = this.currentPageData;
          const selectedRowKeys = this.selectedRowKeys;

          if (checked) {
            selectedRowKeys.push(this.getRecordKey(record));
          } else {
            selectedRowKeys.splice(selectedRowKeys.indexOf(this.getRecordKey(record)), 1);
          }

          if (!this.rowSelection.onSelect) return false;
          let selectedRows = data.filter((row, i) => {
            return selectedRowKeys.indexOf(this.getRecordKey(record)) >= 0;
          });
          this.rowSelection.onSelect(record, checked, selectedRows);
        };
      },
      handleSelectAllRow(e) {
        const checked = e.target.checked;
        const data = this.dataSource;
        const selectedRowKeys = this.selectedRowKeys;
        const changableRowKeys = data
          .filter(item => !this.getCheckboxPropsByItem(item).disabled)
          .map(item => this.getRecordKey(item));

        const changeRowKeys = [];
        if (checked) {
          changableRowKeys.forEach(key => {
            if (selectedRowKeys.indexOf(key) < 0) {
              selectedRowKeys.push(key);
              changeRowKeys.push(key);
            }
          });
        } else {
          changableRowKeys.forEach(key => {
            if (selectedRowKeys.indexOf(key) >= 0) {
              selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
              changeRowKeys.push(key);
            }
          });
        }
        if (this.rowSelection.onSelectAll) {
          const selectedRows = changableRowKeys.filter((row, i) =>
            selectedRowKeys.indexOf(row.key) >= 0);
          const changeRows = changableRowKeys.filter((row, i) =>
            changeRowKeys.indexOf(row.key) >= 0);
          this.rowSelection.onSelectAll(checked, selectedRows, changeRows);
        }
      },
      handlePageChange(current) {
        let pagination = this.pagination;
        if (pagination.onChange) {
          const fnCallback = pagination.onChange(current);
          if (fnCallback.then) {
            fnCallback
            .then(() => {
              pagination.current = current;
            });
          }
        } else {
          pagination.current = current;
          pagination.onChange && pagination.onChange(pagination.current);
        }
      }
    },
    directives: {
      make: {
        update: function(value) {
          let options = {};
          if (typeof value === 'string') {
            options.template = value;
          } else {
            options = value;
          }
          const Temp = Vue.extend(options);
          const instance = new Temp();
          instance.$mount().$appendTo(this.el);
        }
      }
    }
  };
</script>

<style lang="scss">
</style>
