<template>
  <div class="demo">
    <h3 class="demo-title">{{component.__sourceCodeTitle}}</h3>
    <p class="demo-desc">{{component.__sourceCodeDesc}}</p>
    <div class="demo-content">
      <div class="demo-comp">
        <component :is="component" />
      </div>
      <div class="demo-button">
        <Button>查看源码</Button>
      </div>
      <div class="demo-code">
        <pre class="language-html" v-html="sourceCode"></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';

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

    return {
      sourceCode,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #ccc;

.demo {
  .demo-title {
    font-size: 20px;
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