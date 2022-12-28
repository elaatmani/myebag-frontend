<template>
  <div class="main-container">
    <HeaderCategory />
    <!-- <div class="pt-main pa-0"> -->
      <v-container>
        <CategoryContainer :category="categories" title="Brands"/>
        <!-- <CategoryCard /> -->
        <v-spacer></v-spacer>
        <ProductsContainer :products="products" title="Featured shoes" />
        <!-- <ProductsContainer :products="featuredProducts" title="Featured Products" /> -->
        <div class="brands">
          <v-row height="100"> </v-row>
        </div>
      </v-container>
    <!-- </div> -->
  </div>
</template>
<script>
import HeaderCategory from "@/components/category/HeaderCategory.vue";
// import ProductCard from "./../components/home/ProductCard.vue";
import ProductsContainer from "@/components/home/ProductsContainer.vue";
// import CategoryCard from "@/components/category/CategoryCard.vue";
import CategoryContainer from "@/components/category/CategoryContainer.vue";


export default {
  setup() {},
  components: {
    HeaderCategory,
    ProductsContainer,
    // CategoryCard,
    CategoryContainer
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Nike Air Jordan 1",
          price: "149.99",
          rating: 2,
          images: { "1": "/images/category/shoes/cap1.png"},
        },
        {
          id: 2,
          name: "Nike Air Jordan 1",
          price: "149.99",
          rating: 4,
          images: { "1": "/images/category/shoes/cap2.png"},
        },
        {
          id: 3,
          name: "Nike Air Jordan 1",
          price: "149.99",
          rating: 5,
          images: { "1": "/images/category/shoes/cap3.png"},
        },
        {
          id: 4,
          name: "Nike Air Jordan 1",
          price: "149.99",
          rating: 2,
          images: { "1": "/images/category/shoes/addidas2.png" },
        },
        {
          id: 5,
          name: "Nike Air Jordan 1",
          price: "149.99",
          rating: 1,
          images: { "1": "/images/category/shoes/addidas3.png" },
        },
        {
          id: 6,
          name: "Nike Air Jordan 1",
          price: "149.99",
          rating: 5,
          images: { "1": "/images/category/shoes/addidas4.png" },
        },
        {
          id: 7,
          name: "Nike Air Jordan 1",
          price: "149.99",
          rating: 3,
          images: { "1": "/images/category/shoes/addidas1.png" },
        },

      ],
      categories: [
        {
          id: 1,
          name: "gucci",
          rating: 5,
          src: "/images/logos/shoes/addidas.png",
        },
        {
          id: 2,
          name: "addidas",
          rating: 4,
          src: "/images/logos/shoes/gucci.png",
        },
        {
          id: 3,
          name: "channel",
          rating: 3,
          src: "/images/logos/shoes/nike.png",
        },
        {
          id: 4,
          name: "jordan",
          rating: 2,
          src: "/images/logos/shoes/addidas.png",
        },
        {
          id: 5,
          name: "nike",
          rating: 4,
          src: "/images/logos/shoes/gucci.png",
        },
        {
          id: 6,
          name: "shit",
          rating: 1,
          src: "/images/logos/shoes/nike.png",
        },
      ],
    };
  },
  computed: {
    host() {
      return this.$store.state.host
    }
  },
  mounted() {
    console.log('we are in')
  }
  
};
</script>

<style scoped>
/* .main-container {
  padding-top: 15%;
} */

.main-container {
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  /* height: 100vh; */
}
.brands {
  width: 100%;
  border: 2px solid rgba(159, 44, 204, 0.1);
}
</style>
