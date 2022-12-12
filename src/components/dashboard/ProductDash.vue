<template>
    <div>
        <div class="create-btn">
            <v-btn class="mr-2 text-capitalize" @click="changeComponent('create-product')"  color="primary-purple" variant="flat"><v-icon size="large" class="mr-1">mdi-plus</v-icon> Create</v-btn>
        </div>
        <div class="position-relative h-100">
            <div class="d-flex align-center justify-space-between">
                <div class="d-flex justify-center flex-column">
                    <h2 class="text-h6 text-grey-darken-3">Product</h2>
                    <p class="ma-0 text-caption mt-n1 text-grey-darken-1">25 products found</p>

                </div>
            </div>
            <div class="mt-5 d-flex align-center justify-space-between border-bottom pb-3">
                <div class="d-flex">
                    <h3 v-for="tab in tabs" :key="tab.id" @click="activeTab = tab" :class="{'text-primary-purple underlined': tab.id == activeTab.id}" class="text-body-2 text-grey py-2 mr-4 tab">{{ tab.name }}</h3>

                </div>
                <div class="search-container hidden-md-and-down">
                    <v-text-field class="w-100" variant="outlined" :hide-details="true" density="compact" prepend-inner-icon="mdi-magnify" color="primary-purple" label="Search"></v-text-field>
                </div>
            </div>
            <div class="products-container rounded-bs-lg rounded-be-lg bg-pink-lighten-5">
                <h2>
                    {{ activeTab.name }}
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: {id: 1, name: 'All products', category: 'all'},
            tabs: [
                {id: 1, name: 'All products', categiry: 'all'},
                {id: 2, name: 'Shoes', category: 'shoes'},
                {id: 3, name: 'Hoodies', category: 'hoodies'},
                {id: 4, name: 'Watches', category: 'watches'},
            ],
            allProducts: []
        }
    },
    methods: {
        changeComponent(value) {
            this.$emit('changeComponent', value)
        }
    }
}
</script>

<style scoped>
.search-container {
    min-width: 250px;
}

.products-container {
    min-height: 340px;
    width: 100%;
    /* border: 1px solid rgba(255, 10, 10, .2); */
}

.tab {
    user-select: none;
    cursor: pointer;
    transition-duration: .2s;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
}

.underlined {
    border-bottom: 2px solid rgb(var(--v-theme-primary-purple));
}

.border-bottom {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.create-btn {
    position: absolute;
    bottom: 20px;
    right: 15px;
}

</style>