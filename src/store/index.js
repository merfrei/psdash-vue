import Vue from 'vue';
import Vuex from 'vuex';
import modal from './modules/modal';
import sidebar from './modules/sidebar';
import target from './modules/target';
import proxy from './modules/proxy';
import type from './modules/type';
import location from './modules/location';
import provider from './modules/provider';
import plan from './modules/plan';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        modal,
        sidebar,
        target,
        proxy,
        type,
        location,
        provider,
        plan
    }
});
