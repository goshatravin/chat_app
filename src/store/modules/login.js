export default {
    state: {
        userName: ''
    },
    mutations: {
        USER_NAME: (state, payload) => {
            state.userName = payload
        }
    },
    actions: {
        saveUserName ({ commit }, payload) {
            commit('USER_NAME', payload)
        }
    }
}
