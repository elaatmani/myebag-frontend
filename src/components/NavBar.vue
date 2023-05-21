<template>
  <div
    :class="display.mdAndUp.value ? 'fixed-header-pc' : 'fixed-header-mobile'"
    v-click-outside="closeMenu"
    class=""
  >
    <v-container
      class="py-1 px-md-3 d-flex align-center justify-space-between rounded-lg elevation-0-5 border-main full-container"
    >
      <!-- Navogation Logo -->
      <div class="header-logo py-2">
        <img cover src="myLogo.png" />
      </div>

      <!-- Navigation Links -->
      <div class="header-links" v-if="display.mdAndUp.value">
        <v-hover v-slot="{ isHovering, props }" v-for="link in links" :key="link.name">
          <v-btn
            link
            :to="link.path"
            variant="text"
            v-bind="props"
            :color="isHovering ? 'red-lighten-4' : 'red-lighten-3'"
            class="text-capitalize no-hover"
          >
            {{ link.name }}</v-btn
          >
        </v-hover>
      </div>
      <div v-if="display.smAndDown.value">
        <v-btn
          :icon="isDropdownActive ? 'mdi-close' : 'mdi-menu'"
          variant="text"
          color="red-lighten-4"
          @click="toggleMenu"
        ></v-btn>
      </div>
    </v-container>
  </div>

  <DropDownMenu :isActive="isDropdownActive" />
  <!-- Drop Down Menu -->
  <!-- <DropDownMenu :isActive="isDropdownActive" /> -->
</template>

<script>
import { useDisplay } from "vuetify";
import DropDownMenu from "./DropDownMenu.vue";

export default {
  components: { DropDownMenu },
  data() {
    return {
      isDropdownActive: false,
    };
  },
  computed: {
    display() {
      return useDisplay();
    },
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
  methods: {
    toggleMenu() {
      this.isDropdownActive = !this.isDropdownActive;
    },
    closeMenu() {
      this.isDropdownActive = false;
    },
  },
};
</script>
<style scoped>
.border-main {
  border: 1px solid #fc9b9b;
}

.header-logo {
  display: flex;
  height: 60px;
  align-items: center;
  gap: 15px;
}

.fixed-header-pc {
  position: relative;
  z-index: 1000;
  top: 20px;
  width: 100%;
}

.fixed-header-mobile {
  position: relative;
  z-index: 1000;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
}

.header-logo img {
  max-width: 130px;
}
</style>
