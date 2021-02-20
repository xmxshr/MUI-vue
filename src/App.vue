<template>
  <div>
    <header class="topbar">
      <div class="topbar-logo">导航LOGO</div>
      <div class="topbar-side">
        <router-link to="/">路由1</router-link>
        <span> | </span>
        <router-link to="/doc">路由2</router-link>
      </div>
    </header>
  </div>

  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
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
