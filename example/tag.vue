<template lang="html">
  <div>
    <ant-tag>标签一</ant-tag>
    <ant-tag>标签二</ant-tag>
    <ant-tag closable :on-close="onClose">标签三</ant-tag>

    <ant-tag closable color="blue">蓝色</ant-tag>
    <ant-tag closable color="green">绿色</ant-tag>
    <ant-tag closable color="yellow"><a href="https://github.com/ant-design/ant-design/issues/1862">黄色</a></ant-tag>
    <ant-tag closable color="red">红色</ant-tag>

    <ant-tag v-for="tag in tags" :closable="tag.key !== 1" :on-close="() => { handleClose(tag.key) }">{{tag.name}}</ant-tag>
    <ant-button size="small" type="dashed" :on-click="addTag">+ 添加标签</ant-button>
  </div>
</template>

<script>
var index = 3;
export default {
  data: () => ({
    tags: [
      { key: 1, name: '不可移除' },
      { key: 2, name: '标签二' },
      { key: 3, name: '标签三' }
    ]
  }),
  methods: {
    onClose(e) {
      console.log(e);
    },
    handleClose(key) {
      const tags = [...this.tags].filter(tag => (tag.key !== key) && tag);
      console.log(tags);
      this.tags = tags;
    },
    addTag() {
      const tags = [...this.tags];
      index += 1;
      tags.push({ key: index, name: `新标签${index}` });
      this.tags = tags;
    }
  }
};
</script>
