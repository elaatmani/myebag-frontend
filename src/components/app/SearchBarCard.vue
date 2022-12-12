<template>
    <v-hover v-slot="{isHovering, props}">

        <div @click="goToLink('/product/' + product.id)" v-bind="props" :class="isHovering ? 'bg-grey-lighten-5' : 'bg-white'" class="w-100 pa-2 rounded-lg card">
            <v-row>
                <v-col cols="2" md="3"> 
                    <div class="w-100">
                        <v-avatar rounded="lg" size="100%" :image="this.$store.getters.host + product.images['1']"></v-avatar>
                    </div>
                </v-col>
                <v-col cols="10" md="9">
                    <div>
                        <p class="ma-0 text-truncate text-body-2">{{ product.name }}</p>
                        <div class="d-flex justify-space-between mt-1">
                            
                            <p class="ma-0 text-md-caption text-subtitle-2">{{ product.category_id }}</p>
                            <p class="ma-0 text-md-caption text-subtitle-2">${{ product.price }}</p>
                        </div>
                        
                    </div>
                </v-col>
            </v-row>
        </div>
    </v-hover>
</template>
<script>
export default {
    emits: ['closeSearch'],
    props: ['product'],
    data() {
        return {
            rating: 3
        }
    },
    methods: {
        goToLink(link) {
            this.$emit('closeSearch')
            this.$router.push(link)
        }
    },
    mounted() {
        console.log(this.product.name);
    }
}
</script>
<style scoped>
    .card {
        cursor: pointer;
    }
    
</style>