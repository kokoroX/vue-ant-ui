<template lang="html">
  <section class="code-box" :class="{'expand': expand}">
    <section class="code-box-demo">
      <slot name="instance"></slot>
    </section>
    <section class="code-box-meta markdown">
      <div class="code-box-title">
        <a>{{title}}</a>
      </div>
      <slot name="description">{{{description}}}</slot>
      <span class="collapse anticon anticon-circle-o-right" unselectable="none" @click="toggle"></span>
    </section>
    <section class="highlight-wrapper" :class="{'highlight-wrapper-expand': expand}">
      <div class="highlight">
        <pre class="language-jsx">
          <code>{{{code | highlight}}}</code>
        </pre>
      </div>
    </section>
  </section>
</template>

<script>
import highlightjs from 'highlight.js'

export default {
  props: {
    title: String,
    description: String,
    code: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    expand: false
  }),
  methods: {
    toggle () {
      this.expand = !this.expand
    }
  },
  filters: {
    highlight (value) {
      return highlightjs.highlightAuto(value).value
    }
  }
}
</script>
