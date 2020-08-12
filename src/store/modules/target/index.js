const state = {
    targets: []
}

const mutations = {
    UPDATE_TARGETS (state, payload) {
        state.targets = payload;
    }
}

const actions = {
    getTargets ({ commit }) {
        const targets = [
            {'id': 1,
             'identifier': 'AMZ',
             'domain': 'amazon.com',
             'blocked_standby': 15},
             {'id': 2,
             'identifier': 'GLE',
             'domain': 'google.com',
             'blocked_standby': 35},
             {'id': 3,
             'identifier': 'MFR',
             'domain': 'merfrei.com',
             'blocked_standby': 5},
             {'id': 4,
             'identifier': 'FKT',
             'domain': 'fake.com',
             'blocked_standby': 30}
        ];
        commit('UPDATE_TARGETS', targets);
    }
}

const getters = {
    targets: state => state.targets
}

const targetModule = {
    state,
    mutations,
    actions,
    getters
}

export default targetModule;