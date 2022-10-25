import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogged: true,
    user: null
  },
  getters: {
    isLogged: state => {
      return state.isLogged
    },
    user: state => {
      return state.user
    }
  },
  mutations: {
    updateLogin: state => {
      state.isLogged = !state.isLogged
    }
  },
  actions: {
    changeLoginStatut: context => {
      context.commit('updateLogin')
    }
  },
  modules: {
  }
})
