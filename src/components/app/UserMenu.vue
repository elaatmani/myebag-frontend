<template>
    <div class="position-relative" v-click-outside="closeMenu">

        <!-- Show When the user is logged -->
        <v-hover v-slot="{isHovering, props}">
            <div 
            @click="toggleMenu"
            v-if="isLogged" 
            v-bind="props" :class="{'bg-grey-lighten-4': isHovering || isOpen}"
                class="ml-3 mr-1 d-flex align-center position-relative rounded-circle  pa-1 avatar-container">
                <v-avatar class="user-avatar" size="33" image="images/avatar/1.png"></v-avatar>
                <!-- <v-btn  :icon="iconStatus ? 'mdi-chevron-up' : 'mdi-chevron-down'" density="compact" :ripple="false" variant="text" class="ml-1 no-hover hidden-sm-and-down" ></v-btn> -->
            </div>
        </v-hover>

        <!-- Show when the user is logged out -->
        <div 
        v-if="!isLogged">
            <v-btn @click="toggleMenu" icon="mdi-account-outline" variant="text" color="grey-darken-3"></v-btn>
        </div>

        <!-- User Menu When Logged out -->
        <div 
        v-if="!isLogged && isOpen" ref="options" :class="{}"
        class="user-options bg-white elevation-0-5 pa-5 rounded-lg mt-1" >

            <!-- Menu Buttons -->
            <v-hover v-for="option in loginOptions"   :key="option.name" v-slot="{isHovering, props}">

                <v-btn class="no-hover pl-0 mb-2 d-flex align-center text-capitalize w-100 justify-start font-weight-regular" 
                    :color="isHovering ? 'primary-purple' : 'grey-darken-2'" 
                    :ripple="false" variant="text" 
                    v-bind="props"
                    :to="option.path"
                    @click="closeMenu"
                    >
                    <v-icon size="large"  class="mr-2">{{option.icon}}</v-icon>
                    {{option.name}}
                </v-btn>
            </v-hover>
        </div>

        <!-- User Menu When Logged in -->
        <div 
        v-if="isLogged && isOpen" ref="options" :class="{}"
        class="user-options bg-white elevation-0-5 pa-5 rounded-lg" >
            <!-- <p class="text-body-2 text-grey-darken-4 mb-3 ">Hi, Yassine</p> -->

            <!-- Menu Buttons -->
            <v-hover v-for="option in options"   :key="option.name" v-slot="{isHovering, props}">

                <v-btn class="no-hover pl-0 mb-2 d-flex align-center text-capitalize w-100 justify-start font-weight-regular" 
                    :color="isHovering ? 'primary-purple' : 'grey-darken-2'" 
                    :ripple="false" variant="text" 
                    v-bind="props"
                    :to="option.path"
                    @click="closeMenu"
                    >
                    <v-icon size="large"  class="mr-2">{{option.icon}}</v-icon>
                    {{option.name}}
                </v-btn>
            </v-hover>

            <!-- Handling Log out -->
            <div class="w-100 d-flex justify-end">
                <v-btn @click="logout" variant="text" color="red" density="compact" :ripple="false" class="no-hover mt-2 pr-0 text-capitalize">Log out</v-btn>

            </div>
        </div>
        <!-- End user menu -->
    </div>
</template>
<script>
import { useDisplay } from 'vuetify'
export default {
    data() {
        return {
            isOpen: false,
            iconStatus: false,
            options: [
                {
                    name: 'My Profile', 
                    path: '/profile',
                    icon: 'mdi-account-circle-outline'
                },
                {
                    name: 'Wishlist', 
                    path: '/wishlist',
                    icon: 'mdi-heart-outline'
                },
                {
                    name: 'Orders', 
                    path: '/orders',
                    icon: 'mdi-package-variant-closed'

                }
            ],
            loginOptions: [
            {
                    name: 'Log in', 
                    path: '/login',
                    icon: 'mdi-account-circle-outline'
                },
                {
                    name: 'Sign up', 
                    path: '/signup',
                    icon: 'mdi-account-plus-outline'
                },
            ]
        }
    },  
    computed: {
        display() {
            return useDisplay();
        },
        isLogged() {
            return this.$store.state.user.isLogged
        }
    },
    methods: {
        toggleMenu() {
            if(this.isOpen) {
                const menu = this.$refs['options']
                menu.classList.contains('closed') ? menu.classList.remove('closed') : null;
                menu.classList.add('closed')
                this.iconStatus = false

                setTimeout(() => {
                    this.isOpen = false
                }, 300)
            } else {
                this.iconStatus = true
                this.isOpen = true
            }            
        },
        closeMenu() {
            if (this.isOpen) {
                const menu = this.$refs['options']
                menu.classList.contains('closed') ? menu.classList.remove('closed') : null;
                menu.classList.add('closed')
                this.iconStatus = false

                setTimeout(() => {
                    this.isOpen = false
                }, 300)
            }
        },
        logout() {
            this.$store.dispatch('updateLogin', false);
        }
    }
}
</script>

<style scoped>
.avatar-container {
    cursor: pointer;
}

.user-options {
    min-width: 200px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(0, 60px);
    z-index: 0;
    animation: open .2s forwards ease;
}

.user-options::before {
    content: '';
    position: absolute;
    top: 0;
    right: 15px;
    transform: translateY(-95%);
    border: 10px solid transparent;
    border-bottom-color: white;
    z-index: 1;
}

.user-options.closed {
    display: block;
    animation: close .2s forwards ease;
}

/* Open menu animation */

@keyframes open {
    0% {
        opacity: 0;
        transform: translate(15px, 60px);
    }
    
    100% {
        opacity: 1;
        transform: translate(0px, 60px);

    }
}

/* Close menu animation */
@keyframes close {
    0% {
        opacity: 1;
        transform: translate(0px, 60px);
    }
    
    100% {
        opacity: 0;
        transform: translate(15px, 60px);

    }
}

</style>