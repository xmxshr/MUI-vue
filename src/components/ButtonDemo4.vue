<demo>禁用状态</demo>
<desc>按钮的禁用状态</desc>

<template>
  <Button theme="primary">主要primary</Button>
  <Button theme="primary" disabled>主要primary</Button>
  <hr />
  <Button>普通normal</Button>
  <Button disabled>普通normal</Button>
  <hr />
  <Button theme="link">链接link</Button>
  <Button theme="link" disabled>链接link</Button>
  <hr />
  <Button theme="text">文字text</Button>
  <Button theme="text" disabled>文字text</Button>
  <hr />
  <Button theme="primary" danger>主要primary</Button>
  <Button theme="primary" danger disabled>主要primary</Button>
  <hr />
  <Button danger>普通normal</Button>
  <Button danger disabled>普通normal</Button>
  <hr />
  <Button theme="link" danger>链接link</Button>
  <Button theme="link" danger disabled>链接link</Button>
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