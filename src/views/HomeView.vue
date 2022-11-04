<template>
  <div class="pt-main bg-white home">
        <v-container class="px-md-0 top-1">
            <div  class="bg-blue elevation-0-5 rounded-lg pa-5">
              Welcome Home
            </div>
        </v-container>
  </div>
</template>

<script>
// Components

export default {
  name: 'HomeView',

};
</script>

<style scoped>
.home {
  min-height: 100vh;
  position: relative;
}

.home::after {
  background-image: url("@/assets/bg-home.webp");
  background-size: contain;
  position: absolute;
  top: 0;
  left:0;
  content: '';
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: .5;
}

.top-1 {
  position: relative;
  z-index: 2;
}
</style>
