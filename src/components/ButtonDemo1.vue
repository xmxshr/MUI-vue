<demo>按钮类型</demo>
<desc>按钮的基本类型</desc>

<template>
  <Button theme="primary">主要primary</Button>
  <Button>普通normal</Button>
  <Button theme="link">链接link</Button>
  <Button theme="text">文字text</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
// 使用时改为以下引入
// import { Button } from '@xmxshr/mui-vue';

export default {
  components: {
    Button,
  },
};
</script>