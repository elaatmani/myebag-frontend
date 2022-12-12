const user = {
    state: {
        isLogged: false,
        user: null,
        // user: {
        //     "user_avatar": "2",
        //     "user_jwt": "E31ZFNH2GOSLMAITYD5Q",
        //     "username": "null",
        //     "email": "yassine@gmail.com",
        //     "first_name": "Yassine",
        //     "last_name": "Elatmani",
        //     "telephone": "null",
        //     "user_type": "1",
        //     "last_login": "2022-11-15 16:05:02",
        //     "created_at": "2022-11-15 12:26:11"
        // },
        isAdmin: false
    },

    getters: {
        isLogged: state => state.isLogged,
        user: state =>  state.user,
        isAdmin: state => state.isAdmin
    },

    mutations: {
        updateLogin: (state, value) => {
            state.isLogged = value

        },
        updateUser: (state, value) => {
            localStorage.setItem('user', JSON.stringify(value))
            state.user = value

            if (value != null && value != undefined) {
                const isAdmin = value['user_type'] == "1" ? true : false;
                state.isAdmin = isAdmin
            } else {
                state.isAdmin = false
            }
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