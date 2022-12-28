import { createStore } from 'vuex'
import user from './user'
import product from './product'

export default createStore({
  state: {
    host: 'http://localhost:8000',
    localUrl: 'http://localhost:8080',
    // localUrl: 'https://myebag.shop',
    // host: 'https://api.myebag.shop',
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
    user,
    product
  }
})