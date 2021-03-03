import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DefaultDoc from './views/doc/DefaultDoc.vue';
import SwitchDoc from './views/doc/SwitchDoc.vue';
import ButtonDoc from './views/doc/ButtonDoc.vue';
import DialogDoc from './views/doc/DialogDoc.vue';
import TabsDoc from './views/doc/TabsDoc.vue';
import Introduction from './views/doc/Introduction.vue';
import GetStarted from './views/doc/GetStarted.vue';
import Install from './views/doc/Install.vue';

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
        { path: 'introduction', component: Introduction },
        { path: 'get-started', component: GetStarted },
        { path: 'install', component: Install },
        { path: 'switch', component: SwitchDoc },
        { path: 'button', component: ButtonDoc },
        { path: 'dialog', component: DialogDoc },
        { path: 'tabs', component: TabsDoc },
      ]
    },
  ],
});

export default router;