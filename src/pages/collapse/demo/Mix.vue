<template lang="html">
  <div>
    <code-box id="components-collapse-demo-basic" title="面板嵌套" :code="code" :description="description">
      <div slot="instance">
        <ant-collapse :default-active-key="['1']" :on-change="callback">
          <ant-collapse-panel header="This is panel header 1" key="1">
            <ant-collapse defaultActiveKey="4">
              <ant-collapse-panel header="This is panel nest panel" key="4">
                <p>{{text}}</p>
              </ant-collapse-panel>
            </ant-collapse>
          </ant-collapse-panel>
          <ant-collapse-panel header="This is panel header 2" key="2">
            <p>{{text}}</p>
          </ant-collapse-panel>
          <ant-collapse-panel header="This is panel header 3" key="3">
            <p>{{text}}</p>
          </ant-collapse-panel>
        </ant-collapse>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './mix.md'

export default {
  data: () => ({
    text: `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `,
    description,
    code: `
      <template lang="html">
        <div>
          <ant-collapse :default-active-key="['1']" :on-change="callback">
            <ant-collapse-panel header="This is panel header 1" key="1">
              <ant-collapse defaultActiveKey="4">
                <ant-collapse-panel header="This is panel nest panel" key="4">
                  <p>{{text}}</p>
                </ant-collapse-panel>
              </ant-collapse>
            </ant-collapse-panel>
            <ant-collapse-panel header="This is panel header 2" key="2">
              <p>{{text}}</p>
            </ant-collapse-panel>
            <ant-collapse-panel header="This is panel header 3" key="3">
              <p>{{text}}</p>
            </ant-collapse-panel>
          </ant-collapse>
        </div>
      </template>

      \<script\>
      export default {
        data: () => ({
          text: \`
            A dog is a type of domesticated animal.
            Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          \`
        }),
        methods: {
          callback (key) {
            console.log(key)
          }
        }
      }
      \</script\>
    `
  }),
  methods: {
    callback (key) {
      console.log(key)
    }
  }
}
</script>
