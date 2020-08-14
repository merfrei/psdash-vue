const state = {
    plans: []
}

const mutations = {
    UPDATE_PLANS (state, payload) {
        state.plans = payload;
    }
}

const actions = {
    fetchPlans ({ commit }, { api }) {
        api.GET('provider_plan').then((resp) => {
            commit('UPDATE_PLANS', resp.data.data);
        });
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
