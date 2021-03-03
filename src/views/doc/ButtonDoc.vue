<template>
  <h1>Button 组件</h1>
  <DemoBlock :component="ButtonDemo1" />
  <DemoBlock :component="ButtonDemo2" />
  <DemoBlock :component="ButtonDemo3" />
  <DemoBlock :component="ButtonDemo4" />
  <DemoBlock :component="ButtonDemo5" />
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import DemoBlock from '../../components/DemoBlock.vue';
import ButtonDemo1 from '../../components/ButtonDemo1.vue';
import ButtonDemo2 from '../../components/ButtonDemo2.vue';
import ButtonDemo3 from '../../components/ButtonDemo3.vue';
import ButtonDemo4 from '../../components/ButtonDemo4.vue';
import ButtonDemo5 from '../../components/ButtonDemo5.vue';

export default {
  components: {
    Button,
    DemoBlock,
  },
  setup() {
    return {
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
      ButtonDemo5,
    };
  },
};
</script>
