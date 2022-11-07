<template>
  <div>
    <v-container class="px-md-0">
        <div class="section-header w-100 py-5 d-flex justify-space-between align-center">
            <h2 class="text-md-h6 text-body-1 font-weight-medium">Featured Products</h2>
            <v-hover v-slot="{isHovering, props}">
                <v-btn v-bind="props" class="no-hover text-capitalize pr-0" variant="text" :ripple="false" color="primary-purple">See All<v-icon class="t-duration-1" :class="isHovering ? 'ml-4 mr-n2' : 'ml-2'">mdi-arrow-right</v-icon></v-btn>
            </v-hover>
        </div>
        <div class="products">
            <v-row>
                <v-col cols="12" md="3" v-for="product in products" :key="product.id">
                    <ProductCard :product="product" />
                </v-col>
            </v-row>
        </div>

    </v-container>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
    data() {
        return {
            products: [
                { id: 1, name: "Nike Air Jordan 1", price: "$149.99", rating: "4", image: "images/products/2.webp" },
                { id: 2, name: "Pink Panther Diamond ring", price: "$159.99", rating: "4", image: "images/products/1.jpg" },
                { id: 3, name: "Apple Watch 3", price: "$169.99", rating: "5", image: "images/products/4.webp" },
                { id: 4, name: "Nike Air Jordan 4", price: "$179.99", rating: "5", image: "images/products/3.webp" }
            ]
        };
    },
    components: { ProductCard }
}
</script>

<style scoped>

.t-duration-1 {
    transition-duration: .3s;
}

</style>