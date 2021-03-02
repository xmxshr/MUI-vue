<template>
  <div class="miu-tabs">
    <div class="miu-tabs-nav">
      <div class="miu-tabs-nav-item"
        :class="{'miu-tabs-nav-selected': title === selected}"
        v-for="(title, index) in titles" :key="index"
        @click="selectItem(title)"
        :ref="el => { if (el) navItem[index] = el }"
      >
        {{title}}
      </div>
      <div class="miu-tab-indicator" ref="indicator"></div>
    </div>
    <div class="miu-tabs-content">
      <component class="miu-tabs-content-item"
        :class="{'miu-tabs-content-selected': c.props.title === selected}"
        v-for="(c, index) in contents" :key="index" :is="c"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, onUpdated, ref } from 'vue';
import Tab from './Tab.vue';

export default {
  props: {
    selected: {
      type: String,
    },
  },
  components: {
    Tab,
  },
  setup(props, context) {
    const contents = context.slots.default();
    contents.forEach((tag) => {
      if (tag.type !== Tab) throw ('Tabs 子组件只支持 Tab');
    });

    const titles = contents.map(tag => tag.props.title);

    const selectItem = (title) => {
      context.emit('update:selected', title);
    };

    // 下划线宽度及定位
    const navItem = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const setIndicator = () => {
      const curNav = navItem.value.filter(div => div.classList.contains('miu-tabs-nav-selected'))[0];
      indicator.value.style.width = `${curNav.clientWidth}px`;
      indicator.value.style.left = `${curNav.offsetLeft}px`;
    }
    onMounted(setIndicator);
    onUpdated(setIndicator);

    return {
      contents,
      titles,
      selectItem,
      navItem,
      indicator,
    };
  },
};
</script>

<style lang="scss">
$theme-color: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.miu-tabs {
  .miu-tabs-nav {
    display: flex;
    align-items: center;
    position: relative;
    color: $color;
    border-bottom: 1px solid $border-color;
  }

  .miu-tabs-nav-item {
    padding: 8px 0;
    margin: 0 16px;
    cursor: pointer;

    &:first-child {
      margin-left: 0;
    }

    &.miu-tabs-nav-selected {
      color: $theme-color;
    }
  }

  .miu-tab-indicator {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100px;
    height: 3px;
    background-color: $theme-color;
    transition: all 250ms;
  }

  .miu-tabs-content {
    padding: 8px 0;
  }

  .miu-tabs-content-item {
    display: none;

    &.miu-tabs-content-selected {
      display: block;
    }
  }
}
</style>