<template>
  <div class="mr-2">
    <v-avatar size="120" class="rounded-lg border">
        <v-img contain :src="$store.getters.host + src"/>
    </v-avatar>
  </div>
</template>

<script>
export default {
    props:['src', 'id']
}
</script>

<style>

</style>