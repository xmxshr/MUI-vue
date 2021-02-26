<template>
  <div>
    <Button @click="toggle">open</Button>
    <Dialog
      v-model:visible="visible"
      :clickMaskClose="false"
      :okFn="onOkFn"
      :cancelFn="onCancelFn"
    />
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { ref } from 'vue';

export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const onOkFn = () => {
      return false;
    };
    const onCancelFn = () => {
      return false;
    };
    return {
      visible,
      toggle,
      onOkFn,
      onCancelFn,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>