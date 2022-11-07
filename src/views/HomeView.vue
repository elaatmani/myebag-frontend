<template>

  <LoadingLogo v-if="isLoading" />

  <div v-if="!isLoading" class="pt-main  home pb-16">
        <HeroSection />
        <OurServices />
        <FeaturedProducts />
  </div>
</template>

<script>
// Components
import HeroSection from '@/components/home/HeroSection.vue';
import OurServices from '@/components/home/OurServices.vue';
import FeaturedProducts from '@/components/home/FeaturedProducts.vue';
import LoadingLogo from '@/components/app/LoadingLogo.vue';

export default {
  name: 'HomeView',
  components: { HeroSection, OurServices, FeaturedProducts, LoadingLogo },
  data() {
    return {
      isLoading: true
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
