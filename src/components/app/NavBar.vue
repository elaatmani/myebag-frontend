<template>
    <div :class="display.mdAndUp.value ? 'fixed-header-pc' : 'fixed-header-mobile'" v-click-outside="closeMenu">
        <v-container class="bg-white px-2 py-1 px-md-3 d-flex align-center justify-space-between rounded-lg elevation-0-5">
            
            <!-- Navogation Logo -->
            <div class="header-logo py-2">
                <img src="favicon.svg" alt="myebag logo">
                <span class="header-logo-text text-grey-darken-4">My&NonBreakingSpace;Ebag</span>
            </div>

            <!-- Navigation  Links -->
            <div class="header-links" v-if="display.mdAndUp.value">
                <v-hover v-slot="{isHovering, props}" v-for="link in links" :key="link.name">
                    <v-btn  link :to="link.path"
                    variant="text" v-bind="props" :color="isHovering ? 'primary-purple' : 'grey-darken-3'" class="text-capitalize no-hover">{{link.name}}</v-btn>
                </v-hover>
            </div>

            <!-- Navigation Icons -->
            <div class="d-flex align-center">
                <div>
                    <v-btn icon="mdi-magnify" variant="text" color="grey-darken-3"></v-btn>
                </div>
                <div>
                    <v-btn icon="mdi-shopping-outline" variant="text" color="grey-darken-3"></v-btn>
                </div>
                <div v-if="display.smAndDown.value">
                    <v-btn :icon="isDropdownActive ? 'mdi-close' : 'mdi-menu'" variant="text" color="grey-darken-3" @click="toggleMenu"></v-btn>
                </div>
                <div v-if="isLogged" class="ml-3 mr-1 d-flex align-center">
                    <v-avatar class="user-avatar" size="30" image="images/avatar/1.png"></v-avatar>
                </div>
                <div v-else>
                    <v-btn icon="mdi-account-outline" variant="text" color="grey-darken-3"></v-btn>
                </div>
            </div>
        </v-container>
    </div>

    <!-- Drop Down Menu -->
    <DropdownMenu :isActive="isDropdownActive" />
    
</template>
<script>
import { useDisplay } from 'vuetify'
import { useStore } from 'vuex'
import DropdownMenu from './DropdownMenu.vue'

export default {
    components: {DropdownMenu},
    data() {
        return {
            links: [
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/category'},
                { name: 'About', path: '/about'},
                { name: 'Login', path: '/login'},
            ],
            isDropdownActive: false
        }
    },
    computed: {
        display() {
            return useDisplay()
        },
        isLogged(){
            return useStore().getters.isLogged
        }
    },
    methods: {
        toggleMenu(){
            this.isDropdownActive = !this.isDropdownActive
        },
        closeMenu() {
            
            this.isDropdownActive = false
        }
    }
}
</script>
<style scoped>
.fixed-header-pc {
    position: fixed;
    z-index: 100;
    top: 20px;
    width: 100%;
}

.fixed-header-mobile {
    position: fixed;
    z-index: 100;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
}






.header-logo {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 15px;
}

.header-logo img {
    width: 90%;
    max-width: 30px;
}

.header-logo-text {
    font-family: poppins;
    font-weight: medium;
    user-select: none;
}

.user-avatar {
    cursor: pointer;
}
</style>