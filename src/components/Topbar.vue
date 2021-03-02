<template>
  <header class="topbar" :class="{'topbar-bg': background}">
    <div v-if="menuVisible" class="icon-menu-wrap" @click="toggleAside">
      <div class="icon-menu"></div>
    </div>
    <router-link to="/" class="topbar-logo">
      <svg class="icon">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </router-link>
    <div class="topbar-menu">
      <router-link to="/doc">文档</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';

export default {
  props: {
    menuVisible: {
      type: Boolean,
      default: false,
    },
    background: {
      type: Boolean,
      default: true,
    },
  },
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
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1000;
  padding: 15px 30px;

  &.topbar-bg {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }

  .topbar-logo {
    margin-right: auto;
    font-size: 28px;
    line-height: 1;
  }

  @media (max-width: 500px) {
    .topbar-menu {
      display: none;
    }

    .topbar-logo {
      margin-left: auto;
    }

    .icon-menu-wrap {
      display: flex;
    }
  }
}

.icon-menu-wrap {
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 30px;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);

  .icon-menu-base {
    width: 20px;
    height: 2px;
    background-color: #999;
    border-radius: 1px;
  }

  .icon-menu {
    @extend .icon-menu-base;
    position: relative;

    &::before,
    &::after {
      @extend .icon-menu-base;
      content: "";
      position: absolute;
      left: 0;
    }

    &::before {
      top: -8px;
    }

    &::after {
      bottom: -8px;
    }
  }
}
</style>
