## 介绍

这是一个基于 vite ，使用 Vue 3 开发的 Vue UI库。
使用了一些 Vue 3 Composition API，并使用 Typescript 来降低书写过程中代码出错率，优化开发体验。
UI库还在逐步补充完善中，计划增强完善已有组件的功能，并加入更多组件。
所有组件的源代码都很简洁易读，如需参考可查看。

## 安装
#### 使用 npm 或 yarn 安装

```
  $ npm i @xmxshr/mui-vue
```

```
  $ yarn add @xmxshr/mui-vue
```

## 快速上手
在开始使用之前，请确保已 **安装** 本组件库。

### 引入
在需要使用组件的文件中引入对应组件：
```
  import { Button } from '@xmxshr/mui-vue';
```

在 main.js 文件里引入样式：
```
  import '@xmxshr/mui-vue/dist/lib/mui.css';
```

代码示例：
```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>

<script>
import { Button } from "@xmxshr/mui-vue";

export default {
  components: {
    Button,
  },
};
</script>
```