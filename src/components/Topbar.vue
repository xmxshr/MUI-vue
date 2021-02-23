<template>
  <header class="topbar">
    <div class="topbar-logo" @click="toggleAside">导航LOGO</div>
    <div class="topbar-side">
      <router-link to="/">路由1</router-link>
      <span> | </span>
      <router-link to="/doc">路由2</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {
      toggleAside,
    };
  },
};
</script>

<style lang="scss" scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1000;
  padding: 15px 30px;
  color: #fff;
  background: #393;
}
</style>
