const state = {
    plans: []
}

const mutations = {
    UPDATE_PLANS (state, payload) {
        state.plans = payload;
    }
}

const actions = {
    fetchPlans ({ commit }) {
        const plans = [
            {'id': 1,
             'code': 'C50',
             'provider_id': 1,
             'provider_desc': 'Crawlera',
             'name': 'Crawlera C50'},
            {'id': 2,
             'code': 'P50',
             'provider_id': 2,
             'provider_desc': 'My Private Proxy',
             'name': 'Private 50'}
        ];
        commit('UPDATE_PLANS', plans);
    }
}

const getters = {
    getPlans: state => state.plans
}

const locationModule = {
    state,
    mutations,
    actions,
    getters
}

export default locationModule;