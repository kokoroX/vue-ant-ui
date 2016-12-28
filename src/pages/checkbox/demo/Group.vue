<template lang="html">
  <div>
    <code-box id="components-checkbox-demo-group" title="Checkbox 组" :code="code" :description="description">
      <div slot="instance">
        <ant-checkbox-group :options="plainOptions" :value="['Apple']" :on-change="onChange"></ant-checkbox-group>
        <br />
        <ant-checkbox-group :options="options" :default-value="['Pear']" :on-change="onChange"></ant-checkbox-group>
        <br />
        <ant-checkbox-group :options="optionsWithDisabled" disabled :default-value="['Apple']" :on-change="onChange"></ant-checkbox-group>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './group.md'
const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: '苹果', value: 'Apple' },
  { label: '梨', value: 'Pear' },
  { label: '橘', value: 'Orange' }
]
const optionsWithDisabled = [
  { label: '苹果', value: 'Apple' },
  { label: '梨', value: 'Pear' },
  { label: '橘', value: 'Orange', disabled: false }
]

export default {
  data: () => ({
    plainOptions,
    options,
    optionsWithDisabled,
    description,
    code: `
      <template lang="html">
        <div>
          <ant-checkbox-group :options="plainOptions" :default-value="['Apple']" :on-change="onChange"></ant-checkbox-group>
          <br />
          <ant-checkbox-group :options="options" :default-value="['Pear']" :on-change="onChange"></ant-checkbox-group>
          <br />
          <ant-checkbox-group :options="optionsWithDisabled" disabled :default-value="['Apple']" :on-change="onChange"></ant-checkbox-group>
        </div>
      </template>

      \<script\>
      const plainOptions = ['Apple', 'Pear', 'Orange']
      const options = [
        { label: '苹果', value: 'Apple' },
        { label: '梨', value: 'Pear' },
        { label: '橘', value: 'Orange' }
      ]
      const optionsWithDisabled = [
        { label: '苹果', value: 'Apple' },
        { label: '梨', value: 'Pear' },
        { label: '橘', value: 'Orange', disabled: false }
      ]

      export default {
        data: () => ({
          plainOptions,
          options,
          optionsWithDisabled
        }),
        methods: {
          onChange (checkedValues) {
            console.log('checked = ', checkedValues)
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    onChange (checkedValues) {
      console.log('checked = ', checkedValues)
    }
  }
}
</script>
