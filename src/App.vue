<template>
  <div class="app">
    <Topbar />
    <router-view></router-view>
  </div>
</template>

<script>
import { provide, ref } from 'vue';
import Topbar from './components/Topbar.vue';
import router from './router';

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

    router.afterEach(() => {
      if (width < 500) asideVisible.value = false;
    });
  },
};
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
  overflow: hidden;
}
</style>
