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

export default {
  components: {
    Button,
  },
};
</script>