<template>
  <div class="page">
    <Topbar :background="false" />
    <div class="bg-shadow"></div>
    <header class="page-header">
      <h1 class="title">MUI</h1>
      <h2 class="desc">一个用Vue3写的UI组件库</h2>
      <div class="links">
        <a href="https://github.com/xmxshr/MUI-vue" target="_blank" class="link">GitHub</a>
        <router-link to="/doc" class="link">开始</router-link>
      </div>
    </header>
    <main>
      <ul class="features">
        <li class="features-item">
          <h3>易用</h3>
          <p>即刻阅读指南开始使用组件</p>
        </li>
        <li class="features-item">
          <h3>代码易读</h3>
          <p>每个组件的源代码简洁易读</p>
        </li>
        <li class="features-item">
          <h3>基于 Vue 3</h3>
          <p>使用 Vue 3 Composition API</p>
        </li>
      </ul>
    </main>
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
  text-align: center;

  .bg-shadow {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 450px;
    // background-image: linear-gradient(to right bottom, #cbe2fb, #bfdaf8, #b4d1f4, #a8c9f1, #9dc0ed);
    background-image: linear-gradient(to right bottom, #cbe2fb, #a8cdf8, #86b7f5, #64a1f2, #3f8bed);
    clip-path: ellipse(170% 70% at 0% 30%);
  }

  .page-header {
    height: 450px;
    padding-top: 40px;
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
      background-color: #333;
    }
  }

  .features {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    margin: 0 auto;

    @media (min-width: 800px) {
      width: 600px;
    }

    @media (min-width: 1200px) {
      width: 900px;
    }

    .features-item {
      width: 300px;
      margin-bottom: 40px;
    }
  }
}
</style>