<template>
  <DemoBlock :component="SwitchDemo1" />
</template>

<script lang="ts">
import SwitchDemo1 from '../../components/SwitchDemo1.vue';
import DemoBlock from '../../components/DemoBlock.vue';

export default {
  components: {
    DemoBlock,
  },
  setup() {
    return {
      SwitchDemo1,
    };
  },
};
</script>
