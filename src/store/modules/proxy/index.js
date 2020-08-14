const state = {
    proxies: []
}

const mutations = {
    UPDATE_PROXIES (state, payload) {
        state.proxies = payload;
    }
}

const actions = {
    fetchProxies ({ commit }, { api }) {
        api.GET('proxy').then((resp) => {
            commit('UPDATE_PROXIES', resp.data.data);
        });
    }
}

const getters = {
    getProxies: state => state.proxies
}

const proxyModule = {
    state,
    mutations,
    actions,
    getters
}

export default proxyModule;
