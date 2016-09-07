<template lang="html">
  <div class="ant-notification">
    <notice v-for="notice in notices"
      :type="notice.type"
      :message="notice.message"
      :description="notice.description"
      :duration="notice.duration"
      :visible.sync="notice.visible"
      :on-close="() => remove(notice.key)">
    </notice>
  </div>
</template>

<script>
import Notice from './Notice';
let seed = 0;
export default {
  name: 'ant-notification',
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
        message: '',
        description: '',
        key
      };

      if (notices.filter(item => item.key === key).length) return;
      const _notice = {...defaultOption, ...notice};
      this.notices = notices.concat(_notice);
    },
    remove(key) {
      const { notices } = this;
      this.notices = notices.filter(notice => notice.key !== key);
    }
  }
};
</script>
