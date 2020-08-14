const state = {
    providers: []
}

const mutations = {
    UPDATE_PROVIDERS (state, payload) {
        state.providers = payload;
    }
}

const actions = {
    fetchProviders ({ commit }, { api }) {
        api.GET('provider').then((resp) => {
            commit('UPDATE_PROVIDERS', resp.data.data);
        });
    }
}

const getters = {
    getProviders: state => state.providers
}

const locationModule = {
    state,
    mutations,
    actions,
    getters
}

export default locationModule;
