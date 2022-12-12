<template>
  <v-app class="my-application w-100 overflow-hidden">
    <NavBar />
    <v-main>
      <router-view/>
    </v-main>
    <FooterVue v-if="$route.path != '/dashboard'" />
  </v-app>
</template>

<script>
// import axios from 'axios';
import FooterVue from './components/app/FooterVue.vue';
import NavBar from './components/app/NavBar.vue'

export default {
  components: { NavBar, FooterVue },
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    checkUserStatus() {
      if (localStorage.getItem('user') == 'null' || localStorage.getItem('user') == undefined || localStorage.getItem('user') == 'undefined') {
        this.$store.dispatch('updateLogin', false)
        this.$store.dispatch('updateUser', null)
        console.log('user not logged');
      } else {
        const user = JSON.parse(localStorage.getItem('user'));
        this.$store.dispatch('updateUser', user)
        this.$store.dispatch('updateLogin', true)
        console.log(user);
      }
    }
  },
  mounted() {
    this.checkUserStatus()
  }
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