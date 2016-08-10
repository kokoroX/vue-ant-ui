<template lang="html">
  <div>
    <div class="ant-search-input-wrapper" style="width: 200px;">
      <input-group :class="searchCls">
        <ant-input type="textarea" :placeholder="placeholder" :value="value" :on-change="handleInputChange"
          :on-focus="handleFocusBlur" :on-blur="handleFocusBlur" :on-press-enter="handleSearch"
        ></ant-input>
        <!-- <div class="ant-input-group-wrap">
          <ant-button icon="search" :class="btnCls" :size="size" :on-click="handleSearch"></ant-button>
        </div> -->
      </input-group>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        focus: false
      };
    },
    computed: {
      btnCls() {
        return {
          'ant-search-btn': true,
          'ant-search-btn-noempty': !!this.value.trim()
        };
      },
      searchCls() {
        return {
          'ant-search-input': true,
          'ant-search-input-focus': this.focus
        };
      }
    },
    methods: {
      handleInputChange(e) {
        this.value = e.target.value;
      },
      handleFocusBlur(e) {
        this.focus = e.target === document.activeElement;
      },
      handleSearch() {
        this.onSearch && this.onSearch(this.value);
      }
    }
  };
</script>

<style lang="css">
</style>
