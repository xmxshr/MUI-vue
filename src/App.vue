<template>
  <Topbar />
  <router-view></router-view>
</template>

<script>
import { provide, ref } from 'vue';
import Topbar from './components/Topbar.vue';

export default {
  name: 'App',
  components: {
    Topbar,
  },
  setup() {
    const width = document.documentElement.clientWidth;
    // 宽度大于500像素时默认为pc端，文档左侧菜单可见
    const asideVisible = ref((width > 500));
    provide('asideVisible', asideVisible);
  },
};
</script>

<style lang="scss" scoped>

</style>
