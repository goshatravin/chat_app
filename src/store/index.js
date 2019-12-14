import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        login
    },
    getters,
    plugins: [(store) => {
        store.subscribeAction((action, state) => {
            console.debug('Action Type: ', action.type)
            console.debug('Action Payload: ', action.payload)
            console.debug('Current State: ', state)
        })
    }]
})
