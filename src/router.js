import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDoc from './components/SwitchDoc.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc,
      children: [
        { path: 'switch', component: SwitchDoc },
      ]
    },
  ],
});

export default router;