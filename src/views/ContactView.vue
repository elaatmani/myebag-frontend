<template>
  <LoadingLogo v-if="isLoading" />

  <div v-if="!isLoading" class="pt-main contact pb-16">
    <ContactVue></ContactVue>
  </div>
</template>

<script>
import ContactVue from "@/components/ContactVue.vue";
export default {
  name: "ContactView",
  components: { ContactVue },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped>
.contact {
  /* min-height: 100vh; */
  position: relative;
}
.contact {
  /*border-bottom: 2px solid #fc9b9b;*/
  width: 100%;
}

.top-1 {
  position: relative;
  z-index: 2;
}
</style>
