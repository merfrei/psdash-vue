import Vue from 'vue';
import VueRouter from 'vue-router';
import TargetList from '@/components/target/TargetList.vue';
import ProxyList from '@/components/proxy/ProxyList.vue';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/targets',
    name: 'Targets',
    component: TargetList
  },
  {
    path: '/proxies',
    name: 'Proxies',
    component: ProxyList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

/*
TODO
router.beforeEach((to, from, next) => {
  // Check session here
});
*/

export default router;
