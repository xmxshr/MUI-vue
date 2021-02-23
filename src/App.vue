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
    const asideVisible = ref(false);
    provide('asideVisible', asideVisible);
  },
};
</script>

<style lang="scss" scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  color: #fff;
  background: #393;

  .topbar-logo {
    flex: 1;
  }
}
</style>
