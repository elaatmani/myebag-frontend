import { createStore } from 'vuex'
import user from './user'

export default createStore({
  state: {
    host: 'http://localhost:8000'
  },
  getters: {
    host: state => state.host
  },
  mutations: {},
  actions: {},
  modules: {
    user
  }
})
