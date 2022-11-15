<template>
  <div @click="redirectToProduct">
    <!-- Desktop version -->
    <div v-if="display.mdAndUp.value">
        <div class="card-desktop rounded-lg bg-white elevation-0-5  border-grey overflow-hidden">
            <div class="card-image-desktop position-relative">
                <div class="discount px-3 py-1 text-body-2 bg-green-accent-3 border-grey rounded-lg">
                    40%
                </div>
                <div class="w-100 h-100 overflow-hidden">
                    <img :src="product.image" class="" :alt="product.name" />
                </div>
            </div>
            <div class="card-content-desktop position-relative pa-3 pt-5">
                <div class="call-to-action">
                    <v-btn icon="" color="grey" variant="outlined" class="bg-white">
                        <v-icon color="grey-darken-3">mdi-shopping-outline</v-icon>
                    </v-btn>
                </div>
                <div class="py-1">
                    <div>
                        <p class="text-truncate pr-10">
                            {{product.name}}
                        </p>
                        <p class="text-caption text-grey-darken-2">
                            Shoes
                        </p>
                    </div>

                    <div class="d-flex align-center justify-space-between w-100">
                        <div class="d-flex align-center mt-4 text-primary-purple">
                            <div>
                                <v-rating v-model="rating" :readonly="true" density="compact" size="x-small" color="primary-purple"></v-rating>
                            </div>
                            <span class="text-caption">({{ rating }})</span>
                        </div>
                        <div class="price position-relative mt-4">
                            <p class="old-price text-caption">$290.99</p>
                            <p>${{product.price}}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
    <!-- Mobiles version -->
    <div v-if="!display.mdAndUp.value">
        <div class="card-mobile rounded-lg border-grey overflow-hidden d-flex">
            <div class="card-image-mobile ">
                    <img :src="product.image" class="" :alt="product.name" />
                </div>
            <div class="card-content-mobile d-flex flex-column pa-3">
                <div class="w-100 position-relative">
                    <p class="text-truncate text-subtitle-2">{{ product.name }}</p>
                    <div class="rating d-flex align-center text-primary-purple" >
                        <v-rating :readonly="true" density="compact" v-model="rating" ></v-rating>
                        <span class="text-h6">({{ rating }})</span>
                    </div>
                </div>
                <v-spacer></v-spacer>
                <div class="d-flex justify-space-between align-end">
                    <div class="position-relative price">
                        <!-- <p class="mobile-old-price">${{ product?.oldPrice }}</p> -->
                        <p class="old-price text-caption text-grey">$290.99</p>
                        <p>${{ product.price }}</p>
                    </div>
                    <div>
                        <v-btn variant="outlined" size="x-small" color="primary-purple" icon="mdi-chevron-right">
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { useDisplay } from 'vuetify';


export default {
    props: ['product'],
    data() {
        return {
            rating: 0
        }
    },
    computed: {
        display() {
            return useDisplay();
        }
    },
    methods: {
        redirectToProduct() {
            this.$router.push('/product/' + this.product.id)
            // this.$router.push('/product')
        }
    },
    created() {
        this.rating = this.product.rating
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
    object-fit: contain;
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

.discount {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 10;
}


/* Mobile card */
.card-mobile {
    height: 130px;
}

.card-image-mobile {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.card-image-mobile img {
    width: 100%;
    object-fit: contain;

    height: 100%;
}

.card-content-mobile {
    border-left: 1px solid rgba(0, 0, 0, .1);
    height: 100%;
    width: calc(100% - 150px);
}

.rating {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: scale(.6) translateY(130%) translateX(-35%);
}

.price {
    width: fit-content;
}

.old-price {
    position: absolute;
    right: 0;
    top: 0;
    transform: translateY(-80%);
}

.old-price::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, .5);
}

</style>