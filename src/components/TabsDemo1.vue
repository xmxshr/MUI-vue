<demo>基础用法</demo>
<desc>标签的基本用法</desc>

<template>
  <Tabs v-model:selected="curTag">
    <Tab title="标签1">内容1</Tab>
    <Tab title="标签2222">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import { ref } from 'vue';

import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue';
// 使用时改为以下引入
// import { Tab, Tabs } from '@xmxshr/mui-vue';

export default {
  components: {
    Tab,
    Tabs,
  },
  setup() {
    // 默认坐标，取值为title
    const curTag = ref('标签2222');
    return {
      curTag,
    };
  },
};
</script>