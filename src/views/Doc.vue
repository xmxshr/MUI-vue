<template>
  <div class="page">
    <Topbar menuVisible />
    <main class="main">
      <aside class="aside" v-if="asideVisible">
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
.page {
  height: 100vh;
  overflow: hidden;

  .main {
    display: flex;
    height: 100%;
  }

  .aside {
    width: 150px;
    padding: 16px 16px;
    background-color: #add8e6;

    @media (max-width: 500px) {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      padding-top: 66px;
    }
  }

  .aside-title {
    margin-bottom: 4px;
  }

  .aside-list li {
    padding: 4px 0;
  }

  .container {
    flex: 1;
    height: 100%;
  }

  .view {
    height: 100%;
    overflow-x: scroll;
    padding: 10px;
  }
}
</style>