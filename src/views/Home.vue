<template>
  <div class="page">
    <h1 class="title">MUI</h1>
    <h2 class="desc">一个用Vue3写的UI组件库</h2>
    <div class="links">
      <a href="" class="link">GitHub</a>
      <router-link to="/doc" class="link">开始</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.page {
  padding-top: 60px;
  text-align: center;

  .link {
    $h: 32px;
    height: $h;
    line-height: $h;
    padding: 0 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: $h / 2;

    &:first-child {
      margin-right: 30px;
    }
  }
}
</style>