<template>
  <div>
    <h1 class="text-primary-purple">Sorry, Product Not Found</h1>
    <div class="btn text-primary-purple">
      <!-- <v-btn> -->
        <router-link to="/" class="text-decoration-none text-primary-purple"><v-icon color="red" class="text-primary-purple">mdi-arrow-left</v-icon> Go Back </router-link>
      <!-- </v-btn> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style scoped>
*{
  background-color: #f5f5f5 !important;
}
h1{
  padding-top: 50px;
  padding-bottom: 30px;
  margin-left: 120px;
}
.btn {
  padding-bottom:165px ;
  margin-left: 120px;
  text-decoration: none;

}
</style>