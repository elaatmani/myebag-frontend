<template>
  <!-- <LoadingLogo v-if="isLoading" /> -->

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
                <v-btn
                  v-for="btn in components"
                  :key="btn.name"
                  @click="changeComponent(btn.component)"
                  :variant="component == btn.component ? 'flat' : 'text'"
                  class="text-capitalize justify-start rounded-0"
                >
                  <v-icon
                    class="ma-2"
                    :color="
                      component == btn.component ? 'primary-purple' : 'white'
                    "
                    >{{ btn.icon }} </v-icon
                  ><span
                    :class="
                      component == btn.component
                        ? 'text-primary-purple'
                        : 'text-white'
                    "
                    >{{ btn.name }}</span
                  >
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="0" md="10">
            <div class="pa-5 bg-white dashboard-container position-relative">
                <loading-dash v-if="isLoading" />
                <ShowMessage :message="message" v-if="isShowMessage" />
              <keep-alive v-if="!isLoading && !isShowMessage">
                <component
                  @changeComponent="changeComponent"
                  :is="component"
                  @showMessage='showMessage'
                ></component>
              </keep-alive>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import LoadingLogo from "@/components/app/LoadingLogo.vue";
import ProductDash from "@/components/dashboard/ProductDash.vue";
import DashboardMain from "@/components/dashboard/DashboardMain.vue";
import CreateProductForm from "@/components/dashboard/CreateProductForm.vue";
import ShowMessage from '@/components/dashboard/ShowMessage.vue';
import LoadingDash from '@/components/dashboard/LoadingDash.vue';
// import axios from 'axios';

export default {
  components: {
    LoadingLogo,
    "product": ProductDash,
    "dashboard": DashboardMain,
    "create-product": CreateProductForm,
    ShowMessage,
    'loading-dash': LoadingDash
  },
  data() {
    return {
      isShowMessage: false,
      isLoading: true,
      message: {
        status: 'success',
        message: 'Product Created!'
      },
      component: "dashboard",
      components: [
        {
          name: "Dashboard",
          component: "dashboard",
          icon: "mdi-view-dashboard-outline",
        },
        {
          name: "Product",
          component: "product",
          icon: "mdi-package-variant-closed",
        },
        // {
        //   name: "Message",
        //   component: "message",
        //   icon: "mdi-package-variant-closed",
        // },
        {
          name: "Loading",
          component: "loading-dash",
          icon: "mdi-package-variant-closed",
        },
      ],
    };
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
  },
  methods: {
    changeComponent(componentName) {
        this.component = componentName;
        this.isShowMessage = false;
    },
    showMessage(message, show) {
        this.message = message
        this.component = 'message'
        this.isShowMessage = show
    }
  },
  mounted() {
    if (!this.isLogged || !this.isAdmin) {
      this.$router.push("/");
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
    setTimeout(() => {
        this.isLoading = false
    }, 2000)
  },
};
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
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>