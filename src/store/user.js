const user = {
    state: {
        isLogged: false,
        user: null
    },

    getters: {
        isLogged: state => state.isLogged,
        user: state =>  state.user
    },

    mutations: {
        updateLogin: (state, value) => {
            state.isLogged = value

        },
        updateUser: (state, value) => {
            localStorage.setItem('user', JSON.stringify(value))
            state.user = value
        }
    },

    actions: {
        updateLogin: (context, value) => {
            context.commit('updateLogin', value)
        },
        updateUser: (context, value) => {
            context.commit('updateUser', value)
        },
        logout: (context) => {
            context.dispatch('updateUser', null)
        }
    }
}


export default user