<template>
  <div class="demo">
    <h3 class="demo-title">{{component.__sourceCodeTitle}}</h3>
    <p class="demo-desc">{{component.__sourceCodeDesc}}</p>
    <div class="demo-content">
      <div class="demo-comp">
        <component :is="component" />
      </div>
      <div class="demo-button">
        <Button v-if="sourceCodeVisible" @click="toggleSourceCodeVisible(false)">隐藏源码</Button>
        <Button v-else @click="toggleSourceCodeVisible(true)">查看源码</Button>
      </div>
      <div class="demo-code" v-if="sourceCodeVisible">
        <pre class="language-html" v-html="sourceCode"></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
import { ref } from 'vue';

const Prism = (window as any).Prism;

export default {
  props: {
    component: {
      type: Object,
    },
  },
  components: {
    Button,
  },
  setup(props) {
    const sourceCode = Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');

    const sourceCodeVisible = ref(false);
    const toggleSourceCodeVisible = (bool) => {
      sourceCodeVisible.value = bool;
    };

    return {
      sourceCode,
      sourceCodeVisible,
      toggleSourceCodeVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #ccc;

.demo {
  margin-bottom: 40px;

  .demo-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .demo-desc {
    margin-bottom: 20px;
  }

  .demo-content {
    border: 1px solid $border-color;
    border-radius: 4px;
  }

  .demo-comp {
    padding: 10px;
    border-bottom: 1px solid $border-color;
  }

  .demo-button {
    padding: 10px;
    text-align: center;
  }

  .demo-code {
    padding: 10px;
    border-top: 1px solid $border-color;
  }
}
</style>