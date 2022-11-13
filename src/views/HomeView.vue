<template>

  <LoadingLogo v-if="isLoading" />

  <div v-if="!isLoading" class="pt-main  home pb-16">
        <HeroSection />
        <OurServices />
        <ProductsContainer :products="featuredProducts" title="Featured Products" />
        <ProductsContainer :products="recommendedProducts" title="Recommended For You" />
        <ProductsContainer :products="hoodiesProducts" title="Shoes" />
        <ProductsContainer :products="shoesProducts" title="Hoodies" />
      
  </div>
</template>

<script>
// Components
import HeroSection from '@/components/home/HeroSection.vue';
import OurServices from '@/components/home/OurServices.vue';
import ProductsContainer from '@/components/home/ProductsContainer.vue';
import LoadingLogo from '@/components/app/LoadingLogo.vue';

export default {
  name: 'HomeView',
  components: { HeroSection, OurServices, ProductsContainer, LoadingLogo },
  data() {
    return {
      isLoading: true,
      featuredProducts: [
          { id: 1, name: "Nike Air Jordan 1", price: "149.99", rating: 2, image: "images/products/2.webp" },
          { id: 2, name: "Pink Panther Diamond ring", price: "159.99", rating: 3, image: "images/products/1.jpg" },
          { id: 3, name: "Apple Watch 3", price: "169.99", rating: 5, image: "images/products/4.webp" },
          { id: 4, name: "Nike Air Jordan 4", price: "179.99", rating: 1, image: "images/products/3.webp" }
      ],
      recommendedProducts: [
          { id: 1, name: "Nike Air Jordan 1", price: "149.99", rating: 2, image: "images/products/2.webp" },
          { id: 2, name: "Pink Panther Diamond ring", price: "159.99", rating: 3, image: "images/products/2.webp" },
          { id: 3, name: "Apple Watch 3", price: "169.99", rating: 5, image: "images/products/3.webp" },
          { id: 4, name: "Nike Air Jordan 4", price: "179.99", rating: 1, image: "images/products/3.webp" }
      ],
      shoesProducts: [
          { id: 1, name: "Nike Air Jordan 1", price: "149.99", rating: 2, image: "images/products/4.webp" },
          { id: 2, name: "Pink Panther Diamond ring", price: "159.99", rating: 3, image: "images/products/4.webp" },
          { id: 3, name: "Apple Watch 3", price: "169.99", rating: 5, image: "images/products/4.webp" },
          { id: 4, name: "Nike Air Jordan 4", price: "179.99", rating: 1, image: "images/products/4.webp" }
      ],
      hoodiesProducts: [
          { id: 1, name: "Nike Air Jordan 1", price: "149.99", rating: 2, image: "images/avatar/1.webp" },
          { id: 2, name: "Pink Panther Diamond ring", price: "159.99", rating: 3, image: "images/avatar/2.webp" },
          { id: 3, name: "Apple Watch 3", price: "169.99", rating: 5, image: "images/avatar/4.webp" },
          { id: 4, name: "Nike Air Jordan 4", price: "179.99", rating: 1, image: "images/avatar/3.webp" }
      ]
    }
  },
  mounted() {
    setTimeout(() => this.isLoading = false, 2000)
  }
};
</script>

<style scoped>
.home {
  /* min-height: 100vh; */
  position: relative;
}

.top-1 {
  position: relative;
  z-index: 2;
}
</style>
