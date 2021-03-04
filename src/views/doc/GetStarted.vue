<template>
  <article class="markdown-body">
    <h1>快速上手</h1>
    <p>在开始使用之前，请确保已 <a href="#/doc/install">安装</a> 本组件库</p>

    <h3>引入</h3>
    <p>在需要使用组件的文件中引入对应组件</p>
    <pre>import { Button } from '@xmxshr/mui-vue';</pre>

    <p>在 main.js 文件里引入样式：</p>
    <pre>import '@xmxshr/mui-vue/dist/lib/mui.css';</pre>

    <h3>代码示例：</h3>
    <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;Button&gt;按钮&lt;/Button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  import { Button } from "king-ui"

  export default {
    components: {Button}
  }
&lt;/script&gt;
  </code></pre>
  </article>
</template>
