<template lang="html">
  <div>
    <code-box id="components-checkbox-demo-controller" title="和外部组件通信" :code="code" :description="description">
      <div slot="instance">
        <p style="margin-bottom: 20px;">
          <ant-checkbox :checked="checked"
            :disabled="disabled"
            :on-change="onChange"
          >
            {{label}}
          </ant-checkbox>
        </p>
        <p>
          <ant-button type="primary" size="small"
            :on-click="toggleChecked"
          >
            {{!checked ? '选中' : '取消'}}
          </ant-button>
          <ant-button style="margin-left: 10px;"
            type="primary" size="small"
            :on-click="toggleDisable"
          >
            {{!disabled ? '不可用' : '可用'}}
          </ant-button>
        </p>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './controller.md'

export default {
  data: () => ({
    checked: true,
    disabled: false,
    description,
    code: `
      <template lang="html">
        <div>
          <p style="margin-bottom: 20px;">
            <ant-checkbox :checked="checked"
              :disabled="disabled"
              :on-change="onChange"
            >
              {{label}}
            </ant-checkbox>
          </p>
          <p>
            <ant-button type="primary" size="small"
              :on-click="toggleChecked"
            >
              {{!checked ? '选中' : '取消'}}
            </ant-button>
            <ant-button style="margin-left: 10px;"
              type="primary" size="small"
              :on-click="toggleDisable"
            >
              {{!disabled ? '不可用' : '可用'}}
            </ant-button>
          </p>
        </div>
      </template>

      \<script\>
      export default {
        data: () => ({
          checked: true,
          disabled: false
        }),
        computed: {
          label () {
            const { checked, disabled } = this
            return \`\${checked ? '选中' : '取消'}-\${disabled ? '不可用' : '可用'}\`
          }
        },
        methods: {
          toggleChecked () {
            this.checked = !this.checked
          },
          toggleDisable () {
            this.disabled = !this.disabled
          },
          onChange (e) {
            console.log('checked = ', e.target.checked)
            this.checked = e.target.checked
          }
        }
      }
      \</script\>
    `
  }),
  computed: {
    label () {
      const { checked, disabled } = this
      return `${checked ? '选中' : '取消'}-${disabled ? '不可用' : '可用'}`
    }
  },
  methods: {
    toggleChecked () {
      this.checked = !this.checked
    },
    toggleDisable () {
      this.disabled = !this.disabled
    },
    onChange (e) {
      console.log('checked = ', e.target.checked)
      this.checked = e.target.checked
    }
  }
}
</script>
