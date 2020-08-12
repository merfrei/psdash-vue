import Vue from 'vue';
import Vuex from 'vuex';
import sidebar from './modules/sidebar';
import target from './modules/target';
import proxy from './modules/proxy';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sidebar,
    target,
    proxy
  }
});
