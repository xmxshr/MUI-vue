import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DefaultDoc from './components/DefaultDoc.vue';
import SwitchDoc from './components/SwitchDoc.vue';
import ButtonDoc from './components/ButtonDoc.vue';
import DialogDoc from './components/DialogDoc.vue';
import TabsDoc from './components/TabsDoc.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', component: DefaultDoc },
        { path: 'switch', component: SwitchDoc },
        { path: 'button', component: ButtonDoc },
        { path: 'dialog', component: DialogDoc },
        { path: 'tabs', component: TabsDoc },
      ]
    },
  ],
});

export default router;