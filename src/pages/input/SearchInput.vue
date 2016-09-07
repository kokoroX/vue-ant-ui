<template lang="html">
  <div class="ant-search-input-wrapper" :style="style">
    <ant-input-group :class="searchCls">
      <ant-input :placeholder="placeholder" :value="value" :on-change="handleInputChange" :on-focus="handleFocusBlur" :on-blur="handleFocusBlur" :on-press-enter="handleSearch"></ant-input>
      <div class="ant-input-group-wrap">
        <ant-button icon="search" :class="btnCls" :size="size" :on-click="handleSearch"></ant-button>
      </div>
    </ant-input-group>
  </div>
</template>

<script>
export default {
  props: {
    size: String,
    placeholder: String,
    onSearch: {
      type: Function,
      default: () => {}
    }
  },
  data: () => ({
    value: '',
    focus: false
  }),
  computed: {
    btnCls () {
      return {
        'ant-search-btn': true,
        'ant-search-btn-noempty': !!this.value.trim()
      }
    },
    searchCls () {
      return {
        'ant-search-input': true,
        'ant-search-input-focus': this.focus
      }
    }
  },
  methods: {
    handleInputChange (e) {
      this.value = e.target.value
    },
    handleFocusBlur (e) {
      console.log(document.activeElement)
      this.focus = e.target === document.activeElement
    },
    handleSearch () {
      if (this.onSearch) {
        this.onSearch(this.value)
      }
    }
  }
}
</script>
