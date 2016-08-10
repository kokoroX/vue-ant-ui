<template>
  <div>
    <add-sub-list :list="list" :column="column" :add-item="addDemo" :sub-item="subDemo"></add-sub-list>
    {{list}}
  </div>
</template>

<script>
import AddSubList from './AddSubList';

export default {
  name: 'demo',
  components: {
    AddSubList
  },
  data() {
    return {
      list: [123, 321],
      column: {
        render: (record, index) => ({
          template: `
            <ant-input :value="demo"></ant-input>
          `,
          data: () => ({
            demo: index
          })
        })
      }
    };
  },
  methods: {
    addDemo() {
      this.list.push('11');
    },
    subDemo(record, index) {
      this.list.splice(index, 1);
    }
  }
};
</script>
