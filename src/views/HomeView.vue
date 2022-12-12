<template>

  <LoadingLogo v-if="isLoading" />

  <div v-if="!isLoading" class="pt-main  home pb-16">
        <HeroSection />
        <OurServices />
        <ProductsContainer :products="shoes" title="Shoes" />
        <ProductsContainer :products="hoodies" title="Hoodies" />
        <ProductsContainer :products="watches" title="Watches" />
        <NewsLetter />
      
  </div>
</template>

<script>
// Components
import HeroSection from '@/components/home/HeroSection.vue';
import OurServices from '@/components/home/OurServices.vue';
import ProductsContainer from '@/components/home/ProductsContainer.vue';
import NewsLetter from '@/components/home/NewsLetter.vue';
import LoadingLogo from '@/components/app/LoadingLogo.vue';

export default {
  name: 'HomeView',
  components: { HeroSection, OurServices, ProductsContainer, LoadingLogo, NewsLetter },
  data() {
    return {
      isLoading: true,
      featuredProducts: [
          { id: 1, name: "Nike Air Jordan 1", price: "149.99", rating: 2, image: "@/assets/images/products/2.webp" },
          { id: 2, name: "Pink Panther Diamond ring", price: "159.99", rating: 3, image: "images/products/1.jpg" },
          { id: 3, name: "Apple Watch 3", price: "169.99", rating: 5, image: "images/products/4.webp" },
          { id: 4, name: "Nike Air Jordan 4", price: "179.99", rating: 1, image: "images/products/3.webp" }
      ],
      watches: [
          { id: 1, name: "Nike Air Jordan 1", price: "149.99", rating: 2, image: "images/products/watches/1/1.jpg" },
          { id: 2, name: "Pink Panther Diamond ring", price: "159.99", rating: 3, image: "images/products/watches/2/1.jpg" },
          { id: 3, name: "Apple Watch 3", price: "169.99", rating: 5, image: "images/products/watches/3/1.webp" },
          { id: 4, name: "Nike Air Jordan 4", price: "179.99", rating: 1, image: "images/products/watches/4/1.webp" }
      ],
      shoes: [
          { id: 1, name: "Nike Air Jordan 1", price: "149.99", rating: 2, image: "images/products/shoes/1/1.webp" },
          { id: 2, name: "Pink Panther Diamond ring", price: "159.99", rating: 3, image: "images/products/shoes/2/1.webp" },
          { id: 3, name: "Apple Watch 3", price: "169.99", rating: 5, image: "images/products/shoes/3/1.webp" },
          { id: 4, name: "Nike Air Jordan 4", price: "179.99", rating: 1, image: "images/products/shoes/4/1.webp" }
      ],
      hoodies: [
          { id: 1, name: "Nike Air Jordan 1", price: "149.99", rating: 2, image: "images/products/hoodies/1/1.webp" },
          { id: 2, name: "Pink Panther Diamond ring", price: "159.99", rating: 3, image: "images/products/hoodies/2/1.webp" },
          { id: 3, name: "Apple Watch 3", price: "169.99", rating: 5, image: "images/products/hoodies/3/1.webp" },
          { id: 4, name: "Nike Air Jordan 4", price: "179.99", rating: 1, image: "images/products/hoodies/4/1.webp" }
      ]
    }
  },
  mounted() {
    setTimeout(() => this.isLoading = false, 1000)
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
