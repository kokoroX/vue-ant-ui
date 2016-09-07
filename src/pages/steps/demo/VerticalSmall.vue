<template lang="html">
  <div>
    <code-box id="components-steps-demo-vertical-small" title="竖直方向的小型步骤条" :code="code" :description="description">
      <div slot="instance">
        <ant-steps size="small" direction="vertical" :current="1">
          <ant-step>
            <template slot="discription">这里是多信息的描述</template>
            <template slot="title">已完成</template>
          </ant-step>
          <ant-step>
            <template slot="discription">这里是多信息的描述</template>
            <template slot="title">进行中</template>
          </ant-step>
          <ant-step>
            <template slot="title">待运行</template>
            <template slot="discription">这里是多信息的描述</template>
          </ant-step>
          <ant-step>
            <template slot="title">待运行</template>
            <template slot="discription">这里是多信息的描述</template>
          </ant-step>
        </ant-steps>
      </div>
    </code-box>
  </div>
</template>

<script>
import { template as description } from './vertical-small.md'

export default {
  data: () => ({
    description,
    code: `
      <div>
        <ant-steps size="small" direction="vertical" :current="1">
          <ant-step>
            <template slot="discription">这里是多信息的描述</template>
            <template slot="title">已完成</template>
          </ant-step>
          <ant-step>
            <template slot="discription">这里是多信息的描述</template>
            <template slot="title">进行中</template>
          </ant-step>
          <ant-step>
            <template slot="title">待运行</template>
            <template slot="discription">这里是多信息的描述</template>
          </ant-step>
          <ant-step>
            <template slot="title">待运行</template>
            <template slot="discription">这里是多信息的描述</template>
          </ant-step>
        </ant-steps>
      </div>
    `
  })
}
</script>
