<template lang="html">
  <ant-row :gutter="16">
    <simple></simple>
    <small-size></small-size>
    <icon></icon>
    <step-next></step-next>
    <vertical></vertical>
    <vertical-small></vertical-small>
    <error></error>
  </ant-row>
</template>

<script>
import Simple from './Simple'
import SmallSize from './SmallSize'
import Icon from './Icon'
import StepNext from './StepNext'
import Vertical from './Vertical'
import VerticalSmall from './VerticalSmall'
import Error from './Error'

export default {
  components: {
    Simple,
    SmallSize,
    Icon,
    StepNext,
    Vertical,
    VerticalSmall,
    Error
  }
}
</script>
