import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DefaultDoc from './components/DefaultDoc.vue';
import SwitchDoc from './components/SwitchDoc.vue';
import ButtonDoc from './components/ButtonDoc.vue';
import DialogDoc from './components/DialogDoc.vue';
import TabsDoc from './components/TabsDoc.vue';
import Introduction from './components/Introduction.vue';
import GetStarted from './components/GetStarted.vue';
import Install from './components/Install.vue';

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