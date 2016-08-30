<template>
  <div>
    <ant-collapse :active-key="['2']" :on-change="callback" accordion>
      <ant-collapse-panel key="1">
        <template slot="header">This is panel header 1</template>
        <ant-collapse>
          <ant-collapse-panel key="4">
            <template slot="header">This is panel header 4</template>
            <p>{{text}}</p>
          </ant-collapse-panel>
        </ant-collapse>
      </ant-collapse-panel>
      <ant-collapse-panel key="2">
        <template slot="header">This is panel header 2</template>
        <p>{{text}}</p>
      </ant-collapse-panel>
      <ant-collapse-panel key="3">
        <template slot="header">This is panel header 3</template>
        <p>{{text}}</p>
      </ant-collapse-panel>
   </ant-collapse>
  </div>
</template>

<script>
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  export default {
    data() {
      return {
        text
      };
    },
    methods: {
      callback(key) {
        console.log(key);
      }
    }
  };
</script>
