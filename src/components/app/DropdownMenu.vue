<template>
    <div :class="{'active': isActive}" class="fixed-header-menu-mobile" @click="dropdownClosed = true">
        <v-container  class="px-2 py-1 px-md-3 d-flex flex-column justify-center" >
            <div class="menu-container pt-16 pb-3 px-3 bg-white elevation-0-5 rounded-lg">
                <div class="d-flex flex-column h-100 justify-space-between">
                    <v-btn v-for="link in links" :color="$route.path == link.path ? 'primary-purple' : 'grey-darken-3'" :ripple="false" :to="link.path" variant="text" class="no-hover" :key="link.name">{{ link.name }}</v-btn>
                </div>
            </div>
        </v-container>
    </div>
</template>
<script>
export default {
    props: ['isActive', 'links'],
    mounted() {
        console.log('test: ');
        console.log(this.$store.state.user.isLogged);
    },
}
</script>
<style scoped>
    .fixed-header-menu-mobile {
    position: fixed;
    z-index: 99;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    overflow: hidden;
    max-height: 0px;
    transition: all .2s ease-out;
    /* overflow-y: auto; */
}

.fixed-header-menu-mobile.active {
    max-height: 500px !important;
    
}

.menu-container {
    height: 280px;
    border: 2px solid rgba(0,0,0, .1);
    width: 100%;
}

</style>