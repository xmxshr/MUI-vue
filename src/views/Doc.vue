<template>
  <div class="page">
    <Topbar menuVisible />
    <main class="main">
      <aside class="aside" :class="{show: asideVisible}">
        <h2 class="aside-title">快速上手</h2>
        <ol class="aside-list">
          <li><router-link to="/doc/introduction">介绍</router-link></li>
          <li><router-link to="/doc/get-started">开始</router-link></li>
          <li><router-link to="/doc/install">安装</router-link></li>
        </ol>
        <h2 class="aside-title">组件列表</h2>
        <ol class="aside-list">
          <li><router-link to="/doc/switch">Switch组件</router-link></li>
          <li><router-link to="/doc/button">Button组件</router-link></li>
          <li><router-link to="/doc/dialog">Dialog组件</router-link></li>
          <li><router-link to="/doc/tabs">Tabs组件</router-link></li>
        </ol>
      </aside>
      <div class="container">
        <div class="view">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Topbar from '../components/Topbar.vue';
import { inject, Ref } from 'vue';

export default {
  name: 'doc',
  components: {
    Topbar,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {
      asideVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;

.page {
  height: 100vh;
  overflow: hidden;

  .main {
    display: flex;
    height: calc(100% - 60px);
  }

  .aside {
    flex: none;
    display: none;
    width: 180px;
    padding: 16px 0;
    background-color: #d6d6d6;

    &.show {
      display: block;
    }

    @media (max-width: 500px) {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: $aside-index;
      padding-top: 66px;
    }

    @media (min-width: 501px) {
      display: block;
    }
  }

  .aside-title {
    margin: 10px 16px 8px;
    font-size: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, .45);
  }

  .aside-list {
    margin-bottom: 20px;

    > li {
      margin-bottom: 4px;
    }

    a {
      display: block;
      padding: 4px 16px;

      &.router-link-active {
        background-color: #fff;
      }
    }
  }

  .container {
    flex: 1;
    width: calc(100% - 180px);
    height: 100%;
  }

  .view {
    height: 100%;
    overflow-y: auto;
    padding: 0 40px;
  }
}
</style>