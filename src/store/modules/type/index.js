const state = {
    types: []
}

const mutations = {
    UPDATE_TYPES (state, payload) {
        state.types = payload;
    }
}

const actions = {
    fetchTypes ({ commit }, { api }) {
        api.GET('proxy_type').then((resp) => {
            commit('UPDATE_TYPES', resp.data.data);
        });
    }
}

const getters = {
    getTypes: state => state.types
}

const typesModule = {
    state,
    mutations,
    actions,
    getters
}

export default typesModule;
