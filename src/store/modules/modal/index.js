const state = {
    modalVisible: false,
    modalComponent: {},
    modalData: {},
    modalTitle: ''
}

const mutations = {
    UPDATE_MODAL_VISIBILITY (state, visibility) {
        state.modalVisible = visibility;
    },
    UPDATE_MODAL_COMPONENT (state, component) {
        state.modalComponent = component;
    },
    UPDATE_MODAL_DATA (state, data) {
        state.modalData = data;
    },
    UPDATE_MODAL_TITLE (state, title) {
        state.modalTitle = title;
    }
}

const actions = {
    showModal ({ commit }) {
        commit('UPDATE_MODAL_VISIBILITY', true);
    },
    closeModal ({ commit }) {
        commit('UPDATE_MODAL_VISIBILITY', false);
    },
    modalSetBody ({ commit }, component) {
        commit('UPDATE_MODAL_COMPONENT', component);
    },
    modalSetData ({ commit }, data) {
        // Component props
        commit('UPDATE_MODAL_DATA', data);
    },
    modalSetTitle ({ commit }, title) {
        commit('UPDATE_MODAL_TITLE', title);
    }
}

const getters = {
    modalVisible: state => state.modalVisible,
    modalComponent: state => state.modalComponent,
    modalData: state => state.modalData,
    modalTitle: state => state.modalTitle
}

const modalModule = {
    state,
    mutations,
    actions,
    getters
}

export default modalModule;
