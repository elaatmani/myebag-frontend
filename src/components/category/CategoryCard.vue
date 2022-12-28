<template>
  <div @click="redirectToProduct">
    <!-- Desktop version -->
    <div v-if="display.mdAndUp.value">
        <div class="card-desktop rounded-lg bg-white elevation-0-5  border-grey overflow-hidden">
            <div class="card-content-desktop position-relative pa-0 pt-2">
                
                <div class="card-image-desktop">
                                <img :src="category.src" class="" :alt="category.name" />
                            </div>
                <div class="py-1">
                    <div>
                        <p class="text-truncate pl-15 text-primary-purple">
                            {{category.name}}
                        </p>
                    </div>
<!-- 
                    <div class="d-flex align-center justify-space-between w-100">
                        <div class="d-flex align-center mt-4 text-primary-purple">
                            <div>
                                <v-rating v-model="rating" :readonly="true" density="compact" size="x-small" color="primary-purple"></v-rating>
                            </div>
                            <span class="text-caption">({{ rating }})</span>
                        </div>
                    </div> -->
                </div>

            </div>
        </div>
    </div>
    
    <!-- Mobiles version -->
    <div v-if="!display.mdAndUp.value">
        <div class="card-mobile rounded-lg border-grey overflow-hidden d-flex">
            <div class="card-image-mobile ">
                    <img :src="category.src" class="" :alt="category.name" />
                </div>
            <div class="card-content-mobile d-flex flex-column pa-3">
                <div class="w-100 position-relative">
                    <p class="text-truncate d-flex justify-space-between align-center">{{ category.name }}</p>
                    
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { useDisplay } from 'vuetify';
// import { axios } from 'axios' ;

export default {
    props: ['category'],
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
          // axios.get()
          this.$router.push('/category/' + this.category.name)
        }
    },
    created() {
        this.rating = this.category.rating
    }
}
</script>

<style scoped>

/* Desktop Card */
.card-desktop {
    /* width: 100%; */
    max-width: 210px;
    min-height: 150px;
    max-height: 210px;
    cursor: pointer;
}

.card-image-desktop {
    overflow: hidden;
    height: 150px;
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
    object-fit: cover;

    height: 100%;
}

.card-content-mobile {
    border-left: 1px solid rgba(0, 0, 0, .1);
    height: 100%;
    width: calc(100% - 150px);
}



</style>