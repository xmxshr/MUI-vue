<template>
  <div class="demo">
    <h3 class="demo-title">{{SwitchDemo1.__sourceCodeTitle}}</h3>
    <p class="demo-desc">{{SwitchDemo1.__sourceCodeDesc}}</p>
    <div class="demo-content">
      <div class="demo-comp">
        <SwitchDemo1 />
      </div>
      <div class="demo-button">
        <Button>查看源码</Button>
      </div>
      <div class="demo-code">
        <pre>{{SwitchDemo1.__sourceCode}}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SwitchDemo1 from '../../components/SwitchDemo1.vue';
import Button from '../../lib/Button.vue';

export default {
  components: {
    Button,
    SwitchDemo1,
  },
  setup() {
    return {
      SwitchDemo1,
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