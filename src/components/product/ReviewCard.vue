<template>
  <!-- <div class="backdrop" @click.self="closeProductReview"> -->
  <div class="modal">
      <div class="line pa-5 my-2 mx-6">
        <div class="d-flex">
          <v-avatar class="user-avatar" size="33" :image="im0"></v-avatar>
          <span class="ml-3 text-primary-purple font-weight-bold text-h6">{{
            review.persName
          }}</span>
          <div class="ml-10 mt-1 text-grey-lighten-1 font-weight-medium">
            {{ review.delay }}
          </div>
        </div>
        <v-rating
          size="25"
          readonly
          v-model="rating"
          density="compact"
          class="text-primary-purple rating w-auto ml-10"
        ></v-rating>
        <p class="mt-1 ml-3">{{ review.descript }}</p>
      </div>
  </div>
</template>

<script>
export default {
  props: ['review'],
  data() {
    return {
      im0: "images/avatar/1.png",
      
      rating: 0,
      itemsNum: "",
    };
  },

  methods: {
    closeProductReview() {
      this.$emit("close");
    },
    //     display() {
    //     return useDisplay()
    // },
    countreviewsnum() {
      this.itemsNum = this.reviews.length;
    },
  },
  mounted() {
    this.rating = this.review.rating
    // console.log(this.product);
  }
};
</script>

<style scoped>
.modal {
  width: 80%;
  margin: 0 auto;
  overflow-x: hidden;
  border: none;
  width: 100%;
  padding: 20px 0px;
  margin: 0px auto;
  background-color: white;
}
/* .backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  height: auto;
} */

.text-grey-lighten-1 {
  font-size: 10px;
}
.line {
  border: rgba(var(--v-theme-primary-purple), 0.5) 2px solid;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 1px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
.font-weight-medium {
  font-size: 16px;
}
</style>
