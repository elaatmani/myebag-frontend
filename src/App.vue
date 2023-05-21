<template>
  <div class="">
    <v-app class="my-application overflow-hidden bg-black">
      <NavBar />
      <v-main class="bg-grey-darken-5">
        <router-view />
      </v-main>
      <FooterVue />
    </v-app>
  </div>
</template>

<script>
// import axios from 'axios';
import FooterVue from "./components/FooterVue.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: { NavBar, FooterVue },
  name: "App",

  data: () => ({
    //
  }),
  methods: {},
};
</script>

<style lang="scss">
/*@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");*/

$font-family: "Poppins", sans-serif;
.my-application {
  .headline,
  [class*="display-"],
  [class*="text-"] {
    font-family: $font-family, sans-serif !important;
  }
  font-family: $font-family, sans-serif !important;
}
</style>
