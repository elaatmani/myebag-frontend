const product = {
    state: {
        toEditProductId: null,
        products: []
    },
    getters: {
        products: state => state.products,
        toEditProductId: state => state.toEditProductId,
    },

    mutations: {
        setProducts: (state, value) => {
            state.products = value
        },
        setToEditProductId: (state, value) => {
            state.toEditProductId = value
        }
    },

    actions: {
        setProducts: (context, value) => {
            context.commit('setProducts', value)
        },
        setToEditProductId: (context, value) => {
            context.commit('setToEditProductId', value)
        }
    }
}


export default product