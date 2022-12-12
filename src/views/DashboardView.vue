<template>

    <LoadingLogo v-if="isLoading" />

    <div class="pt-main bg-white dashboard">
        <v-container class="px-md-0">
            <div class="rounded-lg overflow-hidden border-main elevation-0-5">
                <v-row :no-gutters="true">
                    <v-col cols="0" md="2" class="hidden-md-and-down">
                        <div class="bg-primary-purple sidebar-menu">
                            <div class="text-body-1 text-white pa-5 text-center">
                                My&NonBreakingSpace;Ebag
                            </div>
                            <div class="d-flex flex-column mt-5">
                                <v-btn v-for="btn in components" :key="btn.name" @click="component = btn.component"
                                    :variant="component == btn.component ? 'flat' : 'text'"
                                    class="text-capitalize justify-start rounded-0">
                                    <v-icon class="ma-2"
                                        :color="component == btn.component ? 'primary-purple' : 'white'">{{ btn.icon }}
                                    </v-icon><span
                                        :class="component == btn.component ? 'text-primary-purple' : 'text-white'">{{
                                                btn.name
                                        }}</span>
                                </v-btn>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="0" md="10">
                        <div class="pa-5 bg-white dashboard-container position-relative">
                            <keep-alive>
                                <component @changeComponent="changeComponent" :is="component"></component>
                            </keep-alive>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>

    </div>
</template>

<script>
import LoadingLogo from '@/components/app/LoadingLogo.vue';
import ProductDash from '@/components/dashboard/ProductDash.vue'
import DashboardMain from '@/components/dashboard/DashboardMain.vue'
import CreateProductForm from '@/components/dashboard/CreateProductForm.vue';
// import axios from 'axios';

export default {
    components: { LoadingLogo, 'product': ProductDash, 'dashboard': DashboardMain, 'create-product': CreateProductForm },
    data() {
        return {
            isLoading: false,
            // component: 'dashboard',
            component: 'create-product',
            components: [
                { name: 'Dashboard', component: 'dashboard', icon: 'mdi-view-dashboard-outline' },
                { name: 'Product', component: 'product', icon: 'mdi-package-variant-closed' },
            ]
        };
    },
    computed: {
        isLogged() {
            return this.$store.getters.isLogged
        },
        isAdmin() {
            return this.$store.getters.isAdmin
        },
    },
    methods: {
        changeComponent(componentName) {
            this.component = componentName
        }
    },
    mounted() {
        if (!this.isLogged || !this.isAdmin) {
            this.$router.push('/')
        } else {


            // const user = this.$store.getters.user
            // const data = {
            //     email: user.email,
            //     token: user.user_jwt
            // }
            // const headers = {
            //     'Content-Type': 'application/x-www-form-urlencoded'
            // }

            // axios.post('/auth/is-admin', data, {headers})
        }
    }
}
</script>

<style scoped>
.dashboard {
    min-height: 100vh;
}

.sidebar-menu {
    min-height: 550px;
}

.dashboard-container {
    min-height: 550px;
}

.border-main {
    border: 1px solid rgba(0, 0, 0, .1);
}
</style>