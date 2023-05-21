<template>
  <div>
    <v-container class="px-md-0">
      <div
        class="section-header w-100 align-center text-white d-md-flex justify-space-around"
      >
        <div>
          <h1 class="text-md-h4">Hello, I'm Abderrahman Aamri</h1>
          <h3 class="text-md-h5 text-body-1">
            a <span class="text-red-lighten-3">Full Stack</span> Developper
          </h3>
          <h5 class="text-grey-darken-1 text-md-subtitle-2 d-none d-md-block w-50">
            I have successfully delivered a wide range of web applications, showcasing my
            proficiency in front-end and back-end development.
          </h5>
          <h5 class="text-grey-darken-1 text-md-subtitle-2 d-md-none">
            I have successfully delivered a wide range of web applications, showcasing
            myproficiency in front-end and back-end development.
          </h5>
          <v-btn class="mt-7 text-black bg-red-lighten-4 mb-10">Text Me </v-btn>
        </div>
        <!-- <img cover src="Web-developer.svg" class="d-none d-sm-block" /> -->
        <img cover src="Web-developer.svg" />
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
.t-duration-1 {
  transition-duration: 0.3s;
}
img {
  width: 350px;
}
</style>
