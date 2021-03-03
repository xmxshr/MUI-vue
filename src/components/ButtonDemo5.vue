<demo>加载中状态</demo>
<desc>按钮的加载中状态</desc>

<template>
  <Button theme="primary" loading>主要primary</Button>
  <Button loading>普通normal</Button>
  <Button theme="link" loading>链接link</Button>
  <Button theme="text" loading>文字text</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {
    Button,
  },
};
</script>