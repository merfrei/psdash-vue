const state = {
    types: []
}

const mutations = {
    UPDATE_TYPES (state, payload) {
        state.types = payload;
    }
}

const actions = {
    fetchTypes ({ commit }) {
        const types = [
            {'id': 1,
             'code': 'PRV',
             'name': 'Private'},
             {'id': 2,
             'code': 'TOR',
             'name': 'Tor'}
        ];
        commit('UPDATE_TYPES', types);
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