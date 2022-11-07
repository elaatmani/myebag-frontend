<template>
  <div>
    <!-- Desktop version -->
    <div v-if="display.mdAndUp.value">
        <div class="card-desktop rounded-lg bg-white elevation-0-5  border-grey overflow-hidden">
            <div class="card-image-desktop">
                <div class="w-100 h-100 overflow-hidden">
                    <img :src="product.image" class="" alt="">
                </div>
            </div>
            <div class="card-content-desktop position-relative pa-3 pt-5">
                <div class="call-to-action">
                    <v-btn icon="" color="grey" variant="outlined" class="bg-white">
                        <v-icon color="grey-darken-3">mdi-shopping-outline</v-icon>
                    </v-btn>
                </div>
                <div class="py-1">
                    <p class="text-truncate pr-10">
                        {{product.name}}
                    </p>
                    <div class="d-flex align-center justify-space-between w-100">
                        <div class="d-flex align-center">
                            <v-rating v-model="rating" :readonly="true" density="dense" size="x-small" color="primary-purple"></v-rating>
                            <span class="text-caption">(5)</span>
                        </div>
                        <p>{{product.price}}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
    <!-- Mobiles version -->
    <div v-if="!display.mdAndUp.value">
        <div class="card-mobile">
            <div class="card-image-mobile">
                
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { useDisplay } from 'vuetify';


export default {
    props: ['product'],
    computed: {
        display() {
            return useDisplay();
        },
        rating() {
            return this.$props.product.rating
        }
    }
}
</script>

<style scoped>

/* Desktop Card */
.card-desktop {
    width: 100%;
    max-width: 350px;
    min-height: 300px;
    max-height: 350px;
    cursor: pointer;
}

.card-image-desktop {
    overflow: hidden;
    height: 200px;
}

.card-image-desktop img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition-duration: .3s;
}
.card-desktop:hover img {
    transform: scale(1.05);
}

.border-grey {
    border: 1px solid rgba(0, 0, 0, .1);
}

.card-content-desktop {
    border-top: 1px solid rgba(0, 0, 0, .1);
}

.call-to-action {
    position: absolute;
    right: 20px;
    top: 0;
    transform: translateY(-50%);
}


/* Mobile card */
.card-mobile {
    min-height: 120px;
}



</style>