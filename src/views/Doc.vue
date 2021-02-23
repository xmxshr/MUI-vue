<template>
  <div class="page">
    <aside class="aside" v-if="asideVisible">
      <h2 class="aside-title">组件列表</h2>
      <ol class="aside-list">
        <li>组件1</li>
        <li>组件2</li>
        <li>组件3</li>
      </ol>
    </aside>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
export default {
  name: 'doc',
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
  .aside {
    width: 150px;
    padding: 50px 16px 16px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #add8e6;
  }

  .aside-title {
    margin-bottom: 4px;
  }

  .aside-list li {
    padding: 4px 0;
  }
}
</style>