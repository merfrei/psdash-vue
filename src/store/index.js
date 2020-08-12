import Vue from 'vue';
import Vuex from 'vuex';
import sidebar from './modules/sidebar';
import target from './modules/target';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sidebar,
    target
  }
});
