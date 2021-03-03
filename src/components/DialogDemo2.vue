<demo>js调用</demo>
<desc>使用 js 调用弹框</desc>

<template>
  <Button @click="showDialog">open</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import { openDialog } from '../lib/openDialog';

export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '点击遮罩不可关闭',
        clickMaskClose: false, // 可选，禁止点击 mask 关闭弹框
        okFn: () => {}, // 可选，点击ok按钮回调
        cancelFn: () => {}, // 可选，点击cancel按钮回调
      });
    };
    return {
      showDialog,
    };
  },
};
</script>