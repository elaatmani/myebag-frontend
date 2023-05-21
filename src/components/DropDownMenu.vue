<template>
  <div
    :class="{ active: isActive }"
    class="fixed-header-menu-mobile"
    @click="dropdownClosed = true"
  >
    <v-container class="px-2 py-1 px-md-3 d-flex flex-column justify-center">
      <div
        class="menu-container pt-16 pb-3 px-3 bg-red-lighten-4 elevation-0-5 rounded-lg"
      >
        <div>
          <v-hover v-slot="{ isHovering, props }" v-for="link in links" :key="link.name">
            <v-btn
              link
              :to="link.path"
              variant="text"
              v-bind="props"
              :color="isHovering ? 'text-grey-darken-4' : 'text-grey-darken-3'"
              class="text-capitalize no-hover"
            >
              {{ link.name }}</v-btn
            >
          </v-hover>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ["isActive"],
  mounted() {},
  computed: {
    links() {
      let main = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Contact", path: "/contact" },
      ];
      return main;
    },
  },
};
</script>
<style scoped>
.fixed-header-menu-mobile {
  position: fixed;
  z-index: 99;
  top: 84.5px;
  left: 40%;
  width: 50%;
  overflow: hidden;
  max-height: 0px;
  transition: all 0.6s ease-out;
  /* overflow-y: auto; */
}

.fixed-header-menu-mobile.active {
  max-height: 300px !important;
}

.menu-container {
  height: 300px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  width: 100%;
}
</style>
