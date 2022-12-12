<template>
  <div>
    <h2 class="text-h6 text-grey-darken-3">Dashboard</h2>
    <div class="mt-3">
      <v-row>
        <v-col md="4" cols="12">
          <div class="products w-100 pa-5 bg-orange text-white rounded-lg d-flex justify-space-between align-center">
            <div>
              <p class="">Products</p>
              <p class="text-h6">20</p>
            </div>
            <div class="dash-icon">
              <v-icon size="x-large">mdi-package-variant-closed</v-icon>
            </div>
          </div>

        </v-col>
        <v-col md="4" cols="12">
          <div class="sells w-100 pa-5 bg-pink rounded-lg d-flex justify-space-between align-center">
            <div>
              <p class="">Orders</p>
              <p class="text-h6">20</p>
            </div>
            <div class="dash-icon">
              <v-icon size="x-large">mdi-cash</v-icon>
            </div>
          </div>

        </v-col>
        <v-col md="4" cols="12">
          <div class="users w-100 pa-5 bg-blue rounded-lg d-flex justify-space-between align-center">
            <div>
              <p class="">Users</p>
              <p class="text-h6">20</p>
            </div>
            <div class="dash-icon">
              <v-icon size="x-large">mdi-account-group</v-icon>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-divider class="mt-3"></v-divider>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.dash-icon {
  transform: scale(1.5);
}

</style>