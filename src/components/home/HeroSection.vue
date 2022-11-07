<template>
    <div class="">
        <v-container class="px-md-0">
            <div>
                <v-row :style="{height: rowHeight}" >
                    <v-col lg="8" md="8" sm="7" cols="12" class="h-100">
                        <div class="pa-md-10 pa-2 main-slider bg-center h-100 rounded-lg"  style="background-image: url('images/assets/slider-img-1s.jpg')">
                            <div class="h-100 w-100 pa-3 d-flex justify-center flex-column text-white" >
                                <div class="text-md-h5 text-h6">New Arrivals</div>
                                <div class="text-md-h3 text-h4 mt-n2">ZIP HOODIE</div>
                                <p class="text-md-body-2 text-caption mt-md-5 mt-2" :style="paragraphWidth">Checkout our new collection of hoodies !</p>
                                <div class="mt-10">
                                    <v-btn variant="outlined" color="white" class="w-auto text-capitalize">Discover Now</v-btn>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col lg="4" md="4" sm="5" cols="12" class="h-100">
                        <v-row class="h-100 " :class="{'gap-1':  display.smAndUp.value}"  :no-gutters="display.smAndUp.value">
                            <v-col cols="6" sm="12" class="h-auto " >
                                <v-hover v-slot="{isHovering, props}">
                                    <div v-bind="props" class="h-100 w-100 overflow-hidden rounded-lg bg-right-bottom bg-yellow-cs seconde-slider" style="background-image: url('images/assets/slider-img-2.webp')">
                                        <div :class="{active: isHovering}" class="content w-100 h-100 text-white pa-3">
                                            <p class="text-caption text-md-subtitle-1">
                                                Shoes
                                            </p>
                                            <div class="hover-btn">
                                                <v-btn v-if="isHovering" :size="display.mdAndUp.value ? 'x-large' : 'small'" icon="mdi-chevron-right" variant="outlined" color="white"></v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </v-hover>
                            </v-col>
                            <v-col cols="6" sm="12" class="h-auto">
                                
                                <v-hover v-slot="{isHovering, props}"> 
                                    <div v-bind="props" class="h-100 w-100 overflow-hidden rounded-lg bg-right-bottom seconde-slider" style="background-color: #a68afc; background-image: url('images/assets/slider-img-6.webp')">
                                        <div :class="{active: isHovering}" class="content w-100 h-100 text-white pa-3">
                                            <p class="text-caption text-md-subtitle-1">
                                                Watches
                                            </p>
                                            <div class="hover-btn">
                                                <v-btn v-if="isHovering" :size="display.mdAndUp.value ? 'x-large' : 'small'" icon="mdi-chevron-right" variant="outlined" color="white"></v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
    </v-container>
    </div>
</template>
<script>
import { useDisplay } from 'vuetify'
export default {
    computed: {
        display() {
            return useDisplay()
        },
        rowHeight() {
            let height = this.display.smAndUp.value ? '430px' : 'fit-content'
            return height
        },
        paragraphWidth() {
            let width = this.display.smAndUp.value ? '370px' : '180px'
            return {maxWidth: width}
        }

    }
}
</script>
<style scoped>

    .hover-btn {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .max-w-350 {
        max-width: 35   0px;
    }
    .content {
        z-index: 1;
        position: relative;
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,.3) 15%, rgba(215,101,253,0) 60%);
        cursor: pointer;
    }
    .content::after {
        opacity: 0;
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.6);
        z-index: -1;
        transition: opacity .5s;
    }

    .content.active::after {
        opacity: 1;
    }
    .main-slider {
        height: 400px;
    }
    
    .bg-center {
        
        background-size: cover;
        background-position: center;
    }

    .bg-right-bottom {
        background-size: contain;
        background-position-x: right;
        background-position-y: bottom;
    }

    .bg-yellow-cs {
        background-color: #fec600;
    }

    .seconde-slider {
        min-height: 120px;
    }

    

    .gap-1 {
        gap: 20px;
    }
</style>