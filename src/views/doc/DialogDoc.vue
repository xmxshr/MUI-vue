<template>
  <h1>Dialog 组件</h1>
  <DemoBlock :component="DialogDemo1" />
  <DemoBlock :component="DialogDemo2" />
  <div class="padding"></div>
</template>

<script lang="ts">
import DemoBlock from '../../components/DemoBlock.vue';
import DialogDemo1 from '../../components/DialogDemo1.vue';
import DialogDemo2 from '../../components/DialogDemo2.vue';

export default {
  components: {
    DemoBlock,
  },
  setup() {
    return {
      DialogDemo1,
      DialogDemo2,
    };
  },
};
</script>
