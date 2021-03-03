<template>
  <h1>Tabs 组件</h1>
  <DemoBlock :component="TabsDemo1" />
  <div class="padding"></div>
</template>

<script lang="ts">
import DemoBlock from '../../components/DemoBlock.vue';
import TabsDemo1 from '../../components/TabsDemo1.vue';

export default {
  components: {
    DemoBlock,
  },
  setup() {
    return {
      TabsDemo1,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>