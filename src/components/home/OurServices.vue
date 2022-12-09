<template>
    <div>
        <v-container class="px-md-0">
            <div class="w-100 h-100 ">
                <h3 class="text-center mb-8 mt-5">Why Choose <span class="text-primary-purple">Us ?</span></h3>
                <v-row>
                    <v-col md="4" cols="12">
                        <div class="card d-flex align-md-center justify-md-center pa-2  bg-white  rounded-lg">
                            <v-icon size="x-large" color="primary-purple" class="mr-5 pa-7 bg-purple-lighten-5 rounded-circle">
                                mdi-truck-outline
                            </v-icon>
                            <div class="text-grey-darken-3">
                                    <h3 class="text-md-subtitle-1 font-weight-medium text-body-1">Free Delivery</h3>
                                    <p class="text-md-body-2 text-caption">For orders above $100</p>
                            </div>
                        </div>
                    </v-col>
                    <v-col md="4" cols="12">
                        <div class="card d-flex align-md-center justify-md-center pa-2  bg-white  rounded-lg">
                            <v-icon size="x-large" color="primary-cyan" class="mr-5 pa-7 bg-cyan-lighten-5 rounded-circle">
                                mdi-cash
                            </v-icon>
                            <div class="text-grey-darken-3">
                                    <h3 class="text-md-subtitle-1 font-weight-medium text-body-1">100% Refund</h3>
                                    <p class="text-md-body-2 text-caption">Money-back after 7 days</p>
                            </div>
                        </div>
                    </v-col>
                    <v-col md="4" cols="12">
                        <div class="card d-flex align-md-center justify-md-center pa-2  bg-white rounded-lg">
                            <v-icon size="x-large" color="yellow-darken-2" class="mr-5 pa-7 bg-yellow-lighten-4 rounded-circle">
                                mdi-crown-outline
                            </v-icon>
                            <div class="text-grey-darken-3">
                                    <h3 class="text-md-subtitle-1 font-weight-medium text-body-1">Premium Quality</h3>
                                    <p class="text-md-body-2 text-caption">Certified top quality items</p>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
    min-height: 60px;
}

</style>