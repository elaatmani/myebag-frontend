<template>
    <div class="position-relative" v-click-outside="closeSearchBar"> 
        <div>
            <v-btn @click="activeSearchBar" icon="mdi-magnify" variant="text" color="grey-darken-3"></v-btn>
        </div>

        <!-- <div v-if="display.smAndUp.value">
            <div class="search-bar-container pa-3 bg-white elevation-0-5 rounded-lg">
                <input v-model="searchHint" type="text" class="search-input pr-12">
            </div>
        </div> -->
        <div :class="isActive ? '' : 'd-none'">
            <div :class="display.smAndUp.value ? 'search-bar-container-pc' : 'search-bar-container-mobile'"
            class="pa-4 bg-white rounded-lg d-flex align-center">
                <input autocomplete="off" ref="search" v-model="searchHint" type="text" placeholder="Search" class="search-input pr-3 pl-10">
                <v-btn class="search-btn text-primary-purple no-hover" :ripple="false"  variant="flat" color="transparent" icon="mdi-magnify"></v-btn>
            </div>

            <div :class="display.smAndUp.value ? 'search-result-pc' : 'search-result-mobile'"
            class="search-result bg-white rounded-be-lg rounded-bs-lg elevation-0-5 border-main">
                <div :class="isLoading && searchHint != '' ? '' : 'd-none'" class="loading rounded-be-lg rounded-bs-lg bg-white">

                </div>
                <div class="w-100 pa-2" :class="!isLoading && searchHint != '' ? '' : 'd-none'">
                    <SearchBarCard @closeSearch="closeSearchBar" />
                    <SearchBarCard @closeSearch="closeSearchBar" />
                    <SearchBarCard @closeSearch="closeSearchBar" />
                    <div class="d-flex justify-end mt-2">
                            <v-btn class="no-hover text-capitalize pr-0 text-body-2" :ripple="false" density="compact" color="primary-purple" variant="text">View more <v-icon class="ml-2">mdi-arrow-right</v-icon></v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useDisplay } from 'vuetify'
import SearchBarCard from './SearchBarCard.vue'
export default {
    emits: ['closeSearch'],
    components: {SearchBarCard},
    data() {
        return {
            isActive: false,
            isLoading: true,
            searchHint: '',
            result: []
        }
    },
    computed: {
        display() {
            return useDisplay()
        }
    },
    methods: {
        activeSearchBar() {
            this.isActive = true
            setTimeout(() => {
                this.$refs['search'].focus();

            }, 100)

            setTimeout(() => {
                this.isLoading = false
            }, 3000)
        },
        closeSearchBar() {
            this.isActive = false
            this.isLoading = true
        }
    }
}
</script>

<style scoped>
.border-main {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    border-left: 1px solid rgba(0, 0, 0, .1);
    border-right: 1px solid rgba(0, 0, 0, .1);
}
.search-input {
    width: 100%;
    min-height: 30px;
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(var(--v-theme-primary-purple));
    font-size: 16px;
}

.search-bar-container {
    min-width: 250px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(65px);
}

.search-bar-container-mobile {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    min-width: 100%;
    height: 100%;
}

.search-btn {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
}


.search-bar-container-pc{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    min-width: 20%;
    height: 100%;
}


.search-result-pc {
    min-width: 275px;
    position: fixed;
    top: 51px;
    right: -1px;
    width: 20%;
}

.search-result-mobile {
    position: fixed;
    top: 51px;
    right: -1px;
    min-width: calc(100% + 2px);
}

.search-result {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;

}

.loading {
    min-height: 100px;
    position: relative;
    width: 100%;
}

.loading::after {
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);    
    border-left: 2px solid rgb(var(--v-theme-primary-cyan));
    border-top: 2px solid rgb(var(--v-theme-primary-purple));
    border-right: 2px solid rgb(var(--v-theme-primary-cyan));
    border-bottom: 2px solid rgb(var(--v-theme-primary-purple));
    border-radius: 50%;

    animation: loading 1s forwards infinite ease-out;
}

@keyframes loading {
    0% {
        transform: translate(-50%, -50%) rotate(0turn);    
    }
    
    100% {
        transform: translate(-50%, -50%) rotate(1turn);    

    }
}

</style>