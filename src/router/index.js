import Vue from 'vue';
import VueRouter from 'vue-router';
import TargetList from '@/components/target/TargetList.vue';
import ProxyList from '@/components/proxy/ProxyList.vue';
import TypeList from '@/components/type/TypeList.vue';
import LocationList from '@/components/location/LocationList.vue';
import ProviderList from '@/components/provider/ProviderList';
import PlanList from '@/components/plan/PlanList';

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
  },
  {
    path: '/types',
    name: 'Types',
    component: TypeList
  },
  {
    path: '/locations',
    name: 'Locations',
    component: LocationList
  },
  {
    path: '/providers',
    name: 'Providers',
    component: ProviderList
  },
  {
    path: '/plans',
    name: 'Plans',
    component: PlanList
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
