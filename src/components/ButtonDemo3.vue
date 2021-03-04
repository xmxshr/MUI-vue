<demo>危险状态</demo>
<desc>按钮的危险状态</desc>

<template>
  <Button theme="primary" danger>主要primary</Button>
  <Button danger>普通normal</Button>
  <Button theme="link" danger>链接link</Button>
  <Button theme="text" danger>文字text</Button>
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