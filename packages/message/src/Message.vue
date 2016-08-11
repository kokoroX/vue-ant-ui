<template lang="html">
  <div class="ant-message">
    <notice v-for="notice in notices"
      :type="notice.type"
      :content="notice.content"
      :duration="notice.duration"
      :visible.sync="notice.visible"
    >
    </notice>
  </div>
</template>

<script>
import Notice from './Notice';
let seed = 0;
export default {
  name: 'ant-message',
  components: {
    Notice
  },
  data: () => ({
    notices: []
  }),
  methods: {
    add(notice) {
      const key = notice.key || seed++;
      const notices = this.notices;
      const defaultOption = {
        visible: true,
        content: ''
      };

      if (notices.filter(item => item.key === key).length) return;
      const _notice = {...defaultOption, ...notice};
      this.notices = notices.concat(_notice);
    },
    remove(key) {
      this.notices.forEach(notice => {
        if (notice.key === key) notice.visible = false;
      });
    }
  }
};
</script>
