<template>
  <LoadingLogo v-if="isLoading" />

  <div v-if="!isLoading" class="pt-main skills pb-16">
    <SkillVue></SkillVue>
  </div>
</template>

<script>
import SkillVue from "@/components/SkillsVue.vue";
export default {
  name: "SkillView",
  components: { SkillVue },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped>
.skills {
  /* min-height: 100vh; */
  position: relative;
}
.skills {
  /*border-bottom: 2px solid #fc9b9b;*/
  width: 100%;
}

.top-1 {
  position: relative;
  z-index: 2;
}
</style>
