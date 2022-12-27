<template>
  <div>
    <!-- <v-container class="px-md-0"> -->
      <div
        class="section-header w-100 py-0 d-flex justify-space-between align-center"
      >
        <h2 class="text-md-h6 text-body-1 font-weight-medium">{{ title }}</h2>
        <v-hover v-slot="{ isHovering, props }">
          <v-btn
            v-bind="props"
            class="no-hover text-capitalize pr-0"
            variant="text"
            :ripple="false"
            color="primary-purple"
            >See All<v-icon
              class="t-duration-1"
              :class="isHovering ? 'ml-4 mr-n2' : 'ml-2'"
              >mdi-arrow-right</v-icon
            ></v-btn
          >
        </v-hover>
      </div>
      <div class="category d-flex justify-center align-center">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3"
            v-for="category in category"
            :key="category.id"
          >
            <CategoryCard :category="category" />
          </v-col>
        </v-row>
      </div>
    <!-- </v-container> -->
  </div>
</template>

<script>
import CategoryCard from "./CategoryCard.vue";

export default {
  props: ["title", "category"],
  data() {
    return {
      
    //   title: "Brands"
    };
  },
  components: { CategoryCard },
};
</script>

<style scoped>


.t-duration-1 {
  transition-duration: 0.3s;
}
</style>
