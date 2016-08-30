<template lang="html">
  <div class="add-sub-list">
    <div class="add-sub-list-item" track-by="$index" v-for="($index, item) in list">
      <!-- <span v-make="column.render(item, $index)"></span> -->
      <compiled :make="column.render(item, $index)"></compiled>
      <ant-button type="primary" shape="circle" icon="minus" :on-click="handleSubItem(item, $index)"></ant-button>
    </div>
    <ant-button type="primary" shape="circle" icon="plus" :on-click="handleAddItem"></ant-button>
  </div>
</template>

<script>
import Vue from 'vue';
import Compiled from './Compile';
export default {
  components: {
    Compiled
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    column: Object,
    addItem: {
      type: Function,
      default: () => {}
    },
    subItem: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleAddItem() {
      this.addItem();
    },
    handleSubItem(record, index) {
      return () => {
        this.subItem(record, index);
      };
    }
  },
  directives: {
    make: {
      update(value) {
        let options = {};
        if (typeof value === 'string') {
          options.template = value;
        } else {
          options = value;
        }
        const Temp = Vue.extend(options);
        const instance = new Temp();
        instance.$mount().$appendTo(this.el);
      },
      unbind() {
        console.log(this);
        // this.vm.$remove();
      }
    }
  }
};
</script>

<style lang="scss">
.add-sub-list-item {
  & > span {
    display: inline-block;
  }
}
</style>
