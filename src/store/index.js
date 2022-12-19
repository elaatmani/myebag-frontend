import { createStore } from 'vuex'
import user from './user'

export default createStore({
  state: {
    host: 'http://localhost:8000',
    localUrl: 'http://localhost:8080',
    // host: 'https://myebag.shop',
  },
  getters: {
    host: state => state.host
  },
  mutations: {
    addToCart: (state, payload) => {
      state.cartProducts.push(payload)
    }
  },
  actions: {},
  modules: {
    user
  }
})