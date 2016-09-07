<template lang="html">
  <div>
    <code-box id="components-badge-demo-change" title="动态" :code="code" :description="description">
      <div slot="instance">
        <ant-badge :count="count">
          <a href="#" class="head-example"></a>
        </ant-badge>
        <ant-badge :dot="show">
          <a href="#" class="head-example"></a>
        </ant-badge>
        <div style="margin-top: 10px;">
          <ant-button-group>
            <ant-button type="ghost" :on-click="decline">
              <ant-icon type="minus"></ant-icon>
            </ant-button>
            <ant-button type="ghost" :on-click="increase">
              <ant-icon type="plus"></ant-icon>
            </ant-button>
          </ant-button-group>
          <ant-button type="ghost" :on-click="onClick" style="margin-left: 8px;">
            切换红点显隐
          </ant-button>
        </div>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './change.md'

export default {
  data: () => ({
    count: 5,
    show: true,
    description,
    code: `
      <template lang="html">
        <div>
          <ant-badge :count="count">
            <a href="#" class="head-example"></a>
          </ant-badge>
          <ant-badge :dot="show">
            <a href="#" class="head-example"></a>
          </ant-badge>
          <div style="margin-top: 10px;">
            <ant-button-group>
              <ant-button type="ghost" :on-click="decline">
                <ant-icon type="minus"></ant-icon>
              </ant-button>
              <ant-button type="ghost" :on-click="increase">
                <ant-icon type="plus"></ant-icon>
              </ant-button>
            </ant-button-group>
            <ant-button type="ghost" :on-click="onClick" style="margin-left: 8px;">
              切换红点显隐
            </ant-button>
          </div>
        </div>
      </template>

      \<script\>
      export default {
        data: () => ({
          count: 5,
          show: true
        }),
        methods: {
          increase () {
            this.count += 1
          },
          decline () {
            let count = this.count - 1
            if (count < 0) {
              count = 0
            }
            this.count = count
          },
          onClick () {
            this.show = !this.show
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    increase () {
      this.count += 1
    },
    decline () {
      let count = this.count - 1
      if (count < 0) {
        count = 0
      }
      this.count = count
    },
    onClick () {
      this.show = !this.show
    }
  }
}
</script>
