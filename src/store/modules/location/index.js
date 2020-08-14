const state = {
    locations: []
}

const mutations = {
    UPDATE_LOCATIONS (state, payload) {
        state.locations = payload;
    }
}

const actions = {
    fetchLocations ({ commit }, { api }) {
        api.GET('proxy_location').then((resp) => {
            commit('UPDATE_LOCATIONS', resp.data.data);
        });
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
