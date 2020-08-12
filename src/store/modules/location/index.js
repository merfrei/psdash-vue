const state = {
    locations: []
}

const mutations = {
    UPDATE_LOCATIONS (state, payload) {
        state.locations = payload;
    }
}

const actions = {
    fetchLocations ({ commit }) {
        const locations = [
            {'id': 1,
             'code': 'US',
             'name': 'United States'},
            {'id': 2,
             'code': 'UK',
             'name': 'United Kingdom'}
        ];
        commit('UPDATE_LOCATIONS', locations);
    }
}

const getters = {
    getLocations: state => state.locations
}

const locationModule = {
    state,
    mutations,
    actions,
    getters
}

export default locationModule;