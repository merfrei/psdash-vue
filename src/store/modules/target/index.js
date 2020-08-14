const state = {
    targets: []
}

const mutations = {
    UPDATE_TARGETS (state, payload) {
        state.targets = payload;
    }
}

const actions = {
    fetchTargets ({ commit }, { api }) {
        api.GET('target').then((resp) => {
            commit('UPDATE_TARGETS', resp.data.data);
        });
    }
}

const getters = {
    getTargets: state => state.targets
}

const targetModule = {
    state,
    mutations,
    actions,
    getters
}

export default targetModule;
