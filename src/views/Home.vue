<template>
  <Topbar :background="false" />
  <div class="page">
    <div class="bg-shadow"></div>
    <h1 class="title">MUI</h1>
    <h2 class="desc">一个用Vue3写的UI组件库</h2>
    <div class="links">
      <a href="https://github.com/xmxshr/MUI-vue" target="_blank" class="link">GitHub</a>
      <router-link to="/doc" class="link">开始</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Topbar from '../components/Topbar.vue';

export default {
  name: 'Home',
  components: {
    Topbar,
  },
};
</script>

<style lang="scss" scoped>
$btn-color: #425ada;

.page {
  position: relative;
  padding-top: 60px;
  text-align: center;

  .bg-shadow {
    position: absolute;
    top: -60px;
    z-index: -1;
    width: 100%;
    height: 450px;
    // background-image: linear-gradient(to right bottom, #cbe2fb, #bfdaf8, #b4d1f4, #a8c9f1, #9dc0ed);
    background-image: linear-gradient(to right bottom, #cbe2fb, #a8cdf8, #86b7f5, #64a1f2, #3f8bed);
    clip-path: ellipse(170% 70% at 0% 30%);
  }

  .desc {
    margin-bottom: 80px;
  }

  .link {
    padding: 8px 20px;
    color: #fff;
    background-color: $btn-color;
    border-radius: 4px;

    &:first-child {
      margin-right: 30px;
    }
  }
}
</style>