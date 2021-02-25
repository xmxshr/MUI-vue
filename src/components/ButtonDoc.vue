<template>
  <h1>Button 组件</h1>
  <h2>示例1 按钮类型</h2>
  <div>
    <Button theme="primary">主要primary</Button>
    <Button>普通normal</Button>
    <Button theme="link">链接link</Button>
    <Button theme="text">文字text</Button>
  </div>

  <h2>示例2 按钮尺寸</h2>
  <div>
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
  </div>

  <h2>示例3 危险状态</h2>
  <div>
    <Button theme="primary" danger>主要primary</Button>
    <Button danger>普通normal</Button>
    <Button theme="link" danger>链接link</Button>
    <Button theme="text" danger>文字text</Button>
  </div>

  <h2>示例4 禁用状态</h2>
  <div>
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
  </div>

  <h2>示例5 加载中状态</h2>
  <div>
    <Button theme="primary" loading>主要primary</Button>
    <Button loading>普通normal</Button>
    <Button theme="link" loading>链接link</Button>
    <Button theme="text" loading>文字text</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
div:last-child {
  padding-bottom: 100px;
}
button + button {
  margin-left: 10px;
}
</style>