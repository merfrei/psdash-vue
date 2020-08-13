import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/login/Login.vue';
import TargetList from '@/components/target/TargetList.vue';
import ProxyList from '@/components/proxy/ProxyList.vue';
import TypeList from '@/components/type/TypeList.vue';
import LocationList from '@/components/location/LocationList.vue';
import ProviderList from '@/components/provider/ProviderList';
import PlanList from '@/components/plan/PlanList';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter: (to, from, next) => {
            router.app.$api.checkSession().then((isOk) => {
                if (isOk) {
                    next('/targets');
                } else {
                    next();
                }
            });
        }
    },
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


router.beforeEach((to, from, next) => {
    // Check session
    if (to.path === '/login') {
        next();
    } else if (router.app.$api === undefined) {
        next('/login');
    } else if (router.app.$api.token === undefined) {
        next('/login');
    } else {
        router.app.$api.checkSession().then((isOk) => {
            if (isOk) {
                next();
            } else {
                next('/login');
            }
        });
    }
});


export default router;
