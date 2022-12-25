const product = {
    state: {
        products: []
    },
    getters: {
        products: state => state.products,
    },

    mutations: {
        setProducts: (state, value) => {
            state.products = value

        }
    },

    actions: {
        setProducts: (context, value) => {
            context.commit('setProducts', value)
        }
    }
}


export default product