<template lang="html">
  <ant-row :gutter="16">
    <inline-form></inline-form>
    <horizontal-form></horizontal-form>
    <form-controls></form-controls>
    <input-group></input-group>
    <mix></mix>
    <advanced-search-form></advanced-search-form>
  </ant-row>
</template>

<script>
import InlineForm from './InlineForm'
import HorizontalForm from './HorizontalForm'
import FormControls from './FormControls'
import InputGroup from './InputGroup'
import Mix from './Mix'
import AdvancedSearchForm from './AdvancedSearchForm'

export default {
  components: {
    InlineForm,
    HorizontalForm,
    FormControls,
    InputGroup,
    Mix,
    AdvancedSearchForm
  }
}
</script>
