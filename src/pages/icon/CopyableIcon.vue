<template lang="html">
  <copy-clipboard :text="text" :on-copy="onCopied">
    <li :class="{'copied': justCopied}">
      <ant-icon :type="type"></ant-icon>
      <span class="anticon-class">{{type}}</span>
    </li>
  </copy-clipboard>
</template>

<script>
import CopyClipboard from 'components/CopyClipboard'

export default {
  props: {
    type: String
  },
  components: {
    CopyClipboard
  },
  data: () => ({
    justCopied: false
  }),
  computed: {
    text () {
      return `<ant-icon type="${this.type}"></ant-icon>`
    }
  },
  methods: {
    onCopied () {
      this.justCopied = true
      setTimeout(() => {
        this.justCopied = false
      }, 1000)
    }
  }
}
</script>
