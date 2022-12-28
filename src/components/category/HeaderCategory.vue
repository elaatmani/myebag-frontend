<template>
  <div class="">
    <div class="top">
      <div class="image">
        <img
          src="images/category/shoes/addidas3.png"
          alt=""
          class="image1 ma-0"
        />
        <v-row class="text-center ma-0 pa-0" justify="center">
          <div
            class="pa-4 ma-3 mb-0 secondary text-no-wrap rounded-pill white--text pill"
          >
            shop now
          </div>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"],
  data() {
    return {};
  },
};
</script>
<style>
* {
  border-spacing: border-box;
}
.image {
  /* background: rgb(255, 255, 255); */
  border-spacing: 0;
}
.image1 {
  background-color: #6354a4;
  width: 100%;
  height: 50vh;
  border-bottom: 8px solid #6354a4;
  border-end-end-radius: 20%;
  border-bottom-left-radius: 20%;
  margin: 0;
  border-spacing: 0;

  /* padding: 0; */
}
.pill {
  width: 20%;
  /* height: 6vh; */
  width: fit-content;
  background-color: #6354a4;
  color: #fff;
}
</style>
