<template lang="html">
  <div>
    <div v-show="false">
      <slot></slot>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="col in columns">
            {{ col.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataSource">
          <td v-for="col in columns">{{ item[col.name] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    dataSource: Array
  },
  data() {
    return {
      demo: 'demo',
      columns: []
    };
  },
  compiled() {
    const children = this.$children;
    children.forEach(item => {
      this.columns.push(item);
      console.log(item._slotContents);
    });
  }
};
</script>
