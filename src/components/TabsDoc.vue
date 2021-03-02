<template>
  <div>
    <Tabs v-model:selected="curTag">
      <Tab title="标签1">内容1</Tab>
      <Tab title="标签2222">内容2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue';

export default {
  components: {
    Tab,
    Tabs,
  },
  setup() {
    const curTag = ref('标签2222');
    return {
      curTag,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>