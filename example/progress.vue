<template lang="html">
  <div>
    <ant-progress :percent="30"></ant-progress>
    <ant-progress :percent="50" status="active"></ant-progress>
    <ant-progress :percent="70" status="exception"></ant-progress>
    <ant-progress :percent="100"></ant-progress>
    <ant-progress :percent="50" :show-info="false"></ant-progress>

    <ant-progress type="circle" :percent="75"></ant-progress>
    <ant-progress type="circle" :percent="70" status="exception"></ant-progress>
    <ant-progress type="circle" :percent="100"></ant-progress>


    <div style="width: 170px;">
      <ant-progress :percent="30" :stroke-width="5"></ant-progress>
      <ant-progress :percent="50" :stroke-width="5" status="active"></ant-progress>
      <ant-progress :percent="70" :stroke-width="5" status="exception"></ant-progress>
      <ant-progress :percent="100" :stroke-width="5"></ant-progress>
    </div>

    <div>
      <ant-progress type="circle" :percent="30" :width="80"></ant-progress>
      <ant-progress type="circle" :percent="70" :width="80" status="exception"></ant-progress>
      <ant-progress type="circle" :percent="100" :width="80"></ant-progress>
    </div>

    <div>
      <ant-progress type="circle" :percent="percent"></ant-progress>
      <ant-button-group>
        <ant-button type="ghost" :on-click="decline" icon="minus"></ant-button>
        <ant-button type="ghost" :on-click="increase" icon="plus"></ant-button>
      </ant-button-group>
    </div>

    <div>
      <ant-progress :percent="percent"></ant-progress>
      <ant-button-group>
        <ant-button type="ghost" :on-click="decline" icon="minus"></ant-button>
        <ant-button type="ghost" :on-click="increase" icon="plus"></ant-button>
      </ant-button-group>
    </div>

    <div>
      <ant-progress type="circle" :percent="75" :format="discount"></ant-progress>
      <ant-progress type="circle" :percent="100" :format="success"></ant-progress>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    percent: 0
  }),
  methods: {
    increase() {
      let percent = this.percent + 10;
      if (percent > 100) {
        percent = 100;
      }
      this.percent = percent;
    },
    decline() {
      let percent = this.percent - 10;
      if (percent < 0) {
        percent = 0;
      }
      this.percent = percent;
    },
    discount: percent => {
      return `${percent / 10.0}折`;
    },
    success: () => {
      return '成功';
    }
  }
};
</script>
