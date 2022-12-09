<template>
    <div class=" bg-grey-lighten-4 py-10 footer">
        <v-container class="px-5 py-1 px-md-3">
            <div>
                <v-row>
                    <v-col cols="12" md="4">
                        <div class="pr-md-10">
                            <div class="logo">
                                <div class="header-logo py-2">
                                    <img src="favicon.svg" alt="myebag logo">
                                    <span class="header-logo-text text-grey-darken-4">My&NonBreakingSpace;Ebag</span>
                                </div>
                            </div>
                            <div class="text-caption text-grey-darken-3">
                                My Ebag is your electronic shopping bag, is an online shopping website where you can find diffrent collection of products, My ebag is here to facilitate your shooping experience.
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="pr-md-10">
                            <h3 class="text-body-1 mt-md-3 mb-md-3 ">Quick Links</h3>
                            <div class="d-flex flex-column">
                                <div v-for="link in links" :key="link.name" color="grey-darken-3" class="text-capitalize text-start text-caption pl-0 no-hover" :ripple="false" style="width: fit-content" variant="outlined">{{ link.name }}</div>
                                
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4">

                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            links: [
                {name: 'Home'},
                {name: 'Shoes'},
                {name: 'Hoodies'},
                {name: 'Watches'}
            ]
        }
    }
}
</script>
<style scoped>
.footer {
    position: relative;
    z-index: 1;
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
</style>