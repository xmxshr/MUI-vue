<demo>基本用法</demo>
<desc>弹框的基本用法</desc>

<template>
  <Button @click="toggle">open</Button>
  <Dialog
    v-model:visible="visible"
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
      return true; // true时 点击ok按钮可关闭弹框
    };
    const onCancelFn = () => {
      return true; // true时 点击cancel按钮可关闭弹框
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