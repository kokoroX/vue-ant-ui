<template lang="html">
  <ant-steps :current="1">
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

  <ant-steps size="small" :current="1">
    <ant-step>
      <template slot="title">已完成</template>
    </ant-step>
    <ant-step>
      <template slot="title">进行中</template>
    </ant-step>
    <ant-step>
      <template slot="title">待运行</template>
    </ant-step>
    <ant-step>
      <template slot="title">待运行</template>
    </ant-step>
  </ant-steps>

  <ant-steps>
    <ant-step status="finish" icon="cloud">
      <template slot="title">步骤1</template>
    </ant-step>
    <ant-step status="process" icon="apple">
      <template slot="title">步骤2</template>
    </ant-step>
    <ant-step status="wait" icon="github">
      <template slot="title">步骤3</template>
    </ant-step>
  </ant-steps>


  <div>
    <div style="margin-bottom: 24px;">当前正在执行第 {{current + 1}} 步</div>
    <ant-steps :current="current">
      <ant-step v-for="step in steps">
        <template slot="title">{{step.title}}</template>
        <template slot="description">{{step.description}}</template>
      </ant-step>
    </ant-steps>
    <div style="margin-top: 24px;">
      <ant-button :on-click="next">下一步</ant-button>
    </div>
  </div>

  <ant-steps direction="vertical" :current="1">
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

  <ant-steps size="small" direction="vertical" status="error" :current="1">
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
</template>

<script>
const array = Array.apply(null, Array(Math.floor(Math.random() * 3) + 3));
const steps = array.map((item, i) => ({
  title: `步骤${i + 1}`
}));

export default {
  data: () => ({
    steps: steps,
    current: Math.floor(Math.random() * steps.length)
  }),
  methods: {
    next() {
      let current = this.current + 1;
      if (current === this.steps.length) {
        current = 0;
      }
      this.current = current;
    }
  }
};
</script>
