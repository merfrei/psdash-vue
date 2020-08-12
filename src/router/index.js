import Vue from 'vue';
import VueRouter from 'vue-router';
import TargetList from '@/components/target/TargetList.vue';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/targets',
    name: 'Targets',
    component: TargetList
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
