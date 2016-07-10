<template>
  <ul :class="`${prefixCls}`" unselectable="unselectable">
    <span :class="`${prefixCls}-total-text`">
      <slot name="showTotal"></slot>
    </span>
    <li title="上一页" :class="[`${prefixCls}-prev`, {[`${prefixCls}-disabled`]: current < 2}]" @click="jumpTo(current - 1)"><a></a></li>

    <li title="第一页" :class="[`${prefixCls}-item`, {[`${prefixCls}-item-active`]: current === 1}]" v-show="pageCount" @click="jumpTo(1)"><a>1</a></li>

    <li :title="`向前 ${padding} 页`" :class="[`${prefixCls}-jump-prev`]" v-show="current>padding" @click="jumpTo(current - padding)"><a></a></li>

    <li :class="[`${prefixCls}-item`, {[`${prefixCls}-item-active`]: current === page}]" v-for="page in pages" @click="jumpTo(page)"><a>{{page}}</a></li></li>

    <li :title="`向后 ${padding} 页`" :class="[`${prefixCls}-jump-next`]" v-show="(current + padding) < pageCount" @click="jumpTo(current + padding)"><a></a></li>

    <li :title="`最后一页: ${pageCount}`" :class="[`${prefixCls}-item`, {[`${prefixCls}-item-active`]: current === pageCount}]" v-show="pageCount && current !== pageCount" @click="jumpTo(pageCount)"><a>{{pageCount}}</a></li>

    <li title="下一页" :class="[`${prefixCls}-next`, {[`${prefixCls}-disabled`]: current >= pageCount}]" @click="jumpTo(current + 1)"><a></a></li>
    <!-- todo select -->
  </ul>
  <!-- <nav class="kokoro-pager">
    <ul class="pagination">
      <li @click.prevent="jumpTo(1)"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
      <li :class="{ 'active': page === nowPage }" v-for="page in pages" @click.prevent="jumpTo(page)"><a href="#">{{page}} <span class="sr-only">(current)</span></a></li></li>
      <li @click.prevent="jumpTo(pageCount)"><a href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
      <li class="disabled"><span>当前页: {{nowPage}}</span></li>
      <li class="disabled"><span>总页数: {{pageCount}}</span></li>
    </ul>
    <div class="form-inline left">
      <input type="text" class="form-control page-input" v-model="inputPage" @keyup.enter="jumpTo(inputPage)">
    </div>
  </nav> -->
</template>

<script>
export default {
  name: 'pagination',
  props: {
    // nowPage: Number,
    // pageCount: Number,
    // padding: Number,
    /**
     * 当前页码
     * @type {Number}
     */
    current: {
      type: Number,
      default: 1
    },
    /**
     * 数据总条数
     * @default 0
     * @type {Object}
     */
    total: {
      type: Number,
      default: 0
    },
    /**
     * 每页条数
     * @default 0
     * @type {Object}
     */
    pageSize: {
      type: Number,
      default: 10
    },
    /**
     * 页码改变时触发回调
     * @default noop
     * @type {Function}
     */
    onChange: {
      type: Function,
      default: () => {}
    },
    /**
     * 是否可以改变pageSize
     * @type {Object}
     */
    showSizeChanger: {
      type: Boolean,
      default: false
    },
    /**
     * 指定每页可以显示多少条
     * @default ['10', '20', '30', '40']
     * @type {Array}
     */
    pageSizeOptions: {
      type: Array,
      default: () => ['10', '20', '30', '40']
    },
    /**
     * pageSize 变化的回调
     * @default noop
     * @type {Object}
     */
    onShowSizeChange: {
      type: Function,
      default: () => {}
    },
    /**
     * 是否可以快速跳转至某页
     * @default false
     * @type {Object}
     */
    showQuickJumper: {
      type: Boolean,
      default: false
    },
    /**
     * 分页尺寸 [small]时是小分页
     * @type {Object}
     */
    size: {
      type: String,
      default: ''
    },
    /**
     * 当添加该属性时，显示为简单分页
     * @type {Object}
     */
    simple: {
      type: Object
    },
    /**
     * 分内页class前缀
     * @default 'pagination'
     * @type {String}
     */
    prefixCls: {
      type: String,
      default: 'ant-pagination'
    },
    /**
     * 当前页两边页码数
     * @type {Object}
     */
    padding: {
      type: Number,
      default: 3
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  data() {
    return {
      inputPage: '',
      pages: []
    };
  },
  created() {
    this.updatePages();
  },
  watch: {
    current() {
      this.updatePages();
    }
  },
  methods: {
    updatePages() {
      var current, padding, pageCount, pages;
      var i;
      current = this.current;
      padding = this.padding;
      pageCount = this.pageCount;
      pages = [];
      for (i = current - padding; i <= current + padding; i++) {
        if (i < 2) continue;
        if (i >= pageCount) break;
        pages.push(i);
      }
      this.pages = pages;
    },
    jumpTo(page) {
      if (typeof page !== 'number') page = parseInt(page, 10);
      if (page < 1) return false;
      if (page > this.pageCount) return false;
      if (page === this.current) return false;
      this.onChange && this.onChange(page);
    }
  }
};
</script>
