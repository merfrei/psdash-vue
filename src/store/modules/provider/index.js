const state = {
    providers: []
}

const mutations = {
    UPDATE_PROVIDERS (state, payload) {
        state.providers = payload;
    }
}

const actions = {
    fetchProviders ({ commit }) {
        const providers = [
            {'id': 1,
             'code': 'CRW',
             'name': 'Crawlera',
             'url': 'crawlera.com'},
            {'id': 2,
             'code': 'MPP',
             'name': 'My Private Proxy',
             'url': 'myprivateproxy.com'}
        ];
        commit('UPDATE_PROVIDERS', providers);
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