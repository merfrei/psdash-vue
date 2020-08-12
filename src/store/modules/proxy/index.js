const state = {
    proxies: []
}

const mutations = {
    UPDATE_PROXIES (state, payload) {
        state.proxies = payload;
    }
}

const actions = {
    getProxies ({ commit }) {
        const proxies = [
            {'id': 1,
             'url': 'http://160.202.77.78:29842',
             'active': true,
             'active_desc': 'Yes',
             'type_id': 2,
             'type_desc': 'Private',
             'location_id': 3,
             'location_desc': 'United States',
             'provider_id': 3,
             'provider_name': 'My Private Proxy',
             'provider_plan_id': 3,
             'plan_desc': 'Private 50',
             'dont_block': false},
             {'id': 2,
             'url': 'http://160.202.77.79:29842',
             'active': true,
             'active_desc': 'Yes',
             'type_id': 2,
             'type_desc': 'Private',
             'location_id': 3,
             'location_desc': 'United States',
             'provider_id': 3,
             'provider_name': 'My Private Proxy',
             'provider_plan_id': 3,
             'plan_desc': 'Private 50',
             'dont_block': false},
             {'id': 3,
             'url': 'http://160.202.77.80:29842',
             'active': true,
             'active_desc': 'Yes',
             'type_id': 2,
             'type_desc': 'Private',
             'location_id': 3,
             'location_desc': 'United States',
             'provider_id': 3,
             'provider_name': 'My Private Proxy',
             'provider_plan_id': 3,
             'plan_desc': 'Private 50',
             'dont_block': false}
        ];
        commit('UPDATE_PROXIES', proxies);
    }
}

const getters = {
    proxies: state => state.proxies
}

const proxyModule = {
    state,
    mutations,
    actions,
    getters
}

export default proxyModule;