const state = {
    sidebarHidden: false
}

const mutations = {
    TOGGLE_SIDEBAR (state) {
        if (state.sidebarHidden) {
            state.sidebarHidden = false;
        } else {
            state.sidebarHidden = true;
        }
    }
}

const actions = {
    toggleSidebar ({ commit }) {
        commit('TOGGLE_SIDEBAR');
    }
}

const getters = {
    sidebarHidden: state => state.sidebarHidden
}

const sidebarModule = {
    state,
    mutations,
    actions,
    getters
}

export default sidebarModule;