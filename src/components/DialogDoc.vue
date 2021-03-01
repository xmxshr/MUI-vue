<template>
  <div>
    <h2>示例1 组件调用</h2>
    <Button @click="toggle">open</Button>
    <Dialog
      v-model:visible="visible"
      :clickMaskClose="false"
      :okFn="onOkFn"
      :cancelFn="onCancelFn"
    >
      <template v-slot:title>
        <div>标题</div>
      </template>
      <template v-slot:content>
        <div>内容</div>
        <div>内容</div>
      </template>
    </Dialog>
  </div>
  <div>
    <h2>示例2 函数调用</h2>
    <Button @click="showDialog">open</Button>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { openDialog } from '../lib/openDialog';
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
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '哈哈',
      });
    };
    return {
      visible,
      toggle,
      onOkFn,
      onCancelFn,
      showDialog,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>