// 引入scss要放在app引入之前，避免被覆盖
import './lib/mui.scss';
import { createApp } from 'vue';
import App from './App.vue';
import './index.scss';
import router from './router';
import 'github-markdown-css';


const app = createApp(App);
app.use(router);
app.mount('#app');
