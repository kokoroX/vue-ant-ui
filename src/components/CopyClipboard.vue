<template lang="html">
  <slot></slot>
</template>

<script>
import copy from 'copy-to-clipboard'

export default {
  props: {
    text: String,
    onCopy: Function
  },
  compiled () {
    this.$el = this.$el.nextSibling

    this.$el.addEventListener('click', (e) => {
      copy(this.text)
      this.onCopy && this.onCopy(e)
    })
  }
}
</script>
