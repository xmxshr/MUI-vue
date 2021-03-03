<demo>按钮尺寸</demo>
<desc>按钮的几种尺寸</desc>

<template>
  <Button theme="primary" size="big">主要primary 大</Button>
  <Button theme="primary">主要primary 标准</Button>
  <Button theme="primary" size="small">主要primary 小</Button>
  <hr />
  <Button size="big">普通normal 大</Button>
  <Button>普通normal 标准</Button>
  <Button size="small">普通normal 小</Button>
  <hr />
  <Button theme="link" size="big">链接link 大</Button>
  <Button theme="link">链接link 标准</Button>
  <Button theme="link" size="small">链接link 小</Button>
  <hr />
  <Button theme="text" size="big">文字text 大</Button>
  <Button theme="text">文字text 标准</Button>
  <Button theme="text" size="small">文字text 小</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {
    Button,
  },
};
</script>