import { createWebHashHistory, createRouter } from 'vue-router';
import HelloWord from './components/HelloWorld.vue';
import HelloWord2 from './components/HelloWorld2.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: HelloWord },
    { path: '/2', component: HelloWord2 },
  ],
});

export default router;