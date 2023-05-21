<template>
  <div class="bg-red-lighten-3 py-10 footer">
    <v-container class="px-5 py-1 px-md-3">
      <div>
        <v-row>
          <v-col cols="12" md="4">
            <div class="pr-md-10">
              <div class="logo"></div>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="pr-md-10">
              <h3 class="text-body-1 mt-md-3 mb-md-3"></h3>
              <div class="d-flex flex-column"></div>
            </div>
          </v-col>
          <v-col cols="12" md="4"> </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.footer {
  position: relative;
  z-index: 1;
}

.header-logo {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 15px;
}

.header-logo img {
  width: 90%;
  max-width: 30px;
}
</style>
