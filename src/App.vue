<template>
  <v-app class="my-application w-100 overflow-hidden">
    <NavBar />
    <v-main>
      <router-view/>
    </v-main>
    <FooterVue />
  </v-app>
</template>

<script>
import FooterVue from './components/app/FooterVue.vue';
import NavBar from './components/app/NavBar.vue'

export default {
  components: { NavBar, FooterVue },
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  $font-family: 'Poppins', sans-serif;
  .my-application {
    .headline,
    [class*='display-'],
    [class*='text-'] {
      font-family: $font-family, sans-serif !important;
    }
    font-family: $font-family, sans-serif !important;
  }
</style>