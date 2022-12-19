<template>
    <div :class="display.mdAndUp.value ? 'fixed-header-pc' : 'fixed-header-mobile'" v-click-outside="closeMenu">
        <v-container
            class="bg-white px-2 py-1 px-md-3 d-flex align-center justify-space-between rounded-lg elevation-0-5 border-main full-container">

            <!-- Navogation Logo -->
            <div class="header-logo py-2">
                <img :src=" localUrl + '/favicon.svg'" alt="myebag logo">
                <span class="header-logo-text text-grey-darken-4">My&NonBreakingSpace;Ebag</span>
            </div>

            <!-- Navigation  Links -->
            <div class="header-links" v-if="display.mdAndUp.value">
                <v-hover v-slot="{ isHovering, props }" v-for="link in links" :key="link.name">
                    <v-btn link :to="link.path" variant="text" v-bind="props"
                        :color="isHovering ? 'primary-purple' : 'grey-darken-3'" class="text-capitalize no-hover">
                        {{ link.name }}</v-btn>
                </v-hover>
            </div>

            <!-- Navigation Icons -->
            <div class="d-flex align-center">
                
                <!-- Search bar component -->
                <SearchBar />
                
                <div>
                    <v-btn icon="mdi-shopping-outline" variant="text" color="grey-darken-3"></v-btn>
                </div>
                <div v-if="display.smAndDown.value" >
                    <v-btn :icon="isDropdownActive ? 'mdi-close' : 'mdi-menu'" variant="text" color="grey-darken-3"
                    @click="toggleMenu"></v-btn>
                </div>
                
                <!-- User Menu List Component -->
                <UserMenu />
                

            </div>
        </v-container>
    </div>

    <!-- Drop Down Menu -->
    <DropdownMenu :links="links" :isActive="isDropdownActive" />

</template>

<script>
import { useDisplay } from 'vuetify'
import DropdownMenu from './DropdownMenu.vue'
import UserMenu from './UserMenu.vue'
import SearchBar from './SearchBar.vue'

export default {
    components: { DropdownMenu, UserMenu, SearchBar },
    data() {
        return {
            isDropdownActive: false
        }
    },
    computed: {
        display() {
            return useDisplay()
        },
        isLogged() {
            return this.$store.user.getters.isLogged
        },
        links() {
            let main = [
                { name: 'Home', path: '/' },
                { name: 'Shoes', path: '/category/shoes' },
                { name: 'Hoodies', path: '/category/hoodies' },
                { name: 'Watches', path: '/category/watches' },
            ]

            return main
        },
        localUrl() {
            return this.$store.state.localUrl
        }
    },
    methods: {
        toggleMenu() {
            this.isDropdownActive = !this.isDropdownActive
        },
        closeMenu() {
            this.isDropdownActive = false
        }
    }
}
</script>
<style scoped>
.border-main {
    border: 1px solid rgba(0, 0, 0, .1);
}
.fixed-header-pc {
    position: fixed;
    z-index: 1000;
    top: 20px;
    width: 100%;
}

.fixed-header-mobile {
    position: fixed;
    z-index: 1000;
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


</style>