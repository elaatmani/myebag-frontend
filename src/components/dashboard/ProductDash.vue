<template>
    <LoadingDash v-if="isLoading" />
    <div v-if="!isLoading">
        <div class="create-btn d-flex justify-space-between w-100 align-end">
            <div class="ml-7 d-flex">
                <div @click="currentNumber = num" v-for="num in nombrePagination" :class="num == currentNumber ? 'bg-primary-purple' : ''" :key="num" class="pa-2 px-4 rounded-lg mr-2 text-caption border pagination">
                    {{num}}
                </div>

            </div>
            <v-btn class="mr-2 text-capitalize" @click="changeComponent('create-product')"  color="primary-purple" variant="flat"><v-icon size="large" class="mr-1">mdi-plus</v-icon> Create</v-btn>
        </div>
        <div class="position-relative h-100">
            <div class="d-flex align-center justify-space-between">
                <div class="d-flex justify-center flex-column">
                    <h2 class="text-h6 text-grey-darken-3">Product</h2>
                    <p class="ma-0 text-caption mt-n1 text-grey-darken-1">{{allProducts.length}} products found</p>

                </div>
            </div>
            <div class="mt-5 d-flex align-center justify-space-between border-bottom pb-3">
                <div class="d-flex">
                    <h3 v-for="tab in tabs" :key="tab.id" @click="changeTab(tab)" :class="{'text-primary-purple underlined': tab.id == activeTab.id}" class="text-body-2 text-grey py-2 mr-4 tab">{{ tab.name }}</h3>

                </div>
                <div class="search-container hidden-md-and-down">
                    <v-text-field class="w-100" variant="outlined" :hide-details="true" density="compact" prepend-inner-icon="mdi-magnify" color="primary-purple" label="Search"></v-text-field>
                </div>
            </div>
            <div class="products-container rounded-bs-lg rounded-be-lg position-relative">
                    <div class="loading" v-if="allProducts.length == 0"></div>
                    <v-table density="comfortable" v-if="allProducts.length > 0" height="330" fixed-header v-memo="[allProducts]">
                        <thead>
                            <tr>
                                <th class="text-left" width="20">
                                Id
                                </th>
                                <th class="text-left" width="40">
                                Image
                                </th>
                                <th class="text-left">
                                Name
                                </th>
                                <th class="text-left">
                                Price
                                </th>
                                <th>
                                Category
                                </th>
                                <th class="text-left">
                                Created At
                                </th>
                                <th class="text-left">
                                Action
                                </th>
                            </tr>
                        </thead>
                        <tbody class="font-weight-regular">
                            <tr v-for="product in productsByPagination" :key="product.id">
                                <td>
                                    {{product.id}}
                                </td>
                                <td>
                                    <v-avatar lazy class="rounded-0" size="30" v-if="product.images">
                                        <v-img :cover="true" :src="$store.state.host + product.images[1]"></v-img>
                                    </v-avatar>
                                </td>
                                <td>
                                    {{product.name}}
                                </td>
                                <td>
                                    ${{product.price}}
                                </td>
                                <td>
                                    {{product.category.name}}
                                </td>
                                <td>
                                    {{product.created_at}}
                                </td>
                                <td>
                                    <v-btn size="x-small" color="blue" variant="text" icon="mdi-eye"></v-btn>
                                    <v-btn @click="editProduct(product.id)" size="x-small" color="green" variant="text" icon="mdi-pencil"></v-btn>
                                    <v-btn size="x-small" color="red" variant="text" icon="mdi-cancel"></v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import LoadingDash from '@/components/dashboard/LoadingDash'
export default {
    emits: ['showMessage', 'changeComponent'],
    components: {LoadingDash},
    data() {
        return {
            isLoading: false,
            currentNumber: 1,
            activeTab: {id: 1, name: 'All products', category: 'all'},
            tabs: [
                {id: 1, name: 'All products', category: 'all'},
                {id: 2, name: 'Shoes', category: 'shoes'},
                {id: 3, name: 'Hoodies', category: 'hoodies'},
                {id: 4, name: 'Watches', category: 'watches'},
            ],
            allProducts: []
        }
    },
    computed: {
        products() {
            
            if(this.activeTab.category == 'all') {
                return this.allProducts
            } else {
                return this.allProducts.filter(p => p.category.name == this.activeTab.category)
            }
        },
        productsByPagination() {
            const start = (this.currentNumber - 1) * 7;
            const end = ((this.currentNumber - 1) * 7) + 7;
            return this.products.slice(start, end)
        },
        nombrePagination() {
            console.log('how many 7 ' + (this.allProducts.length / 7));
            return Math.floor(this.products.length / 7) + 1
        }
    },
    methods: {
        changeComponent(value) {
            this.$emit('changeComponent', value)
        },
        changeTab(tab) {
            this.currentNumber = 1
            this.activeTab = tab
        },
        editProduct(id) {
            this.$store.dispatch('setToEditProductId', id)
            this.changeComponent('edit-product')
        }
    },
    mounted() {
        axios.get(this.$store.state.host + '/products').then(res => {
            setTimeout(() => {

                this.allProducts = res.data.products
                this.isLoading = false
            }, 10)
        }).catch(err => {
            console.log(err);
            this.isLoading = false
        })
    }
}
</script>

<style scoped>
.pagination {
    cursor: pointer;
}
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


.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border: 2px solid transparent;
    border-right-color: rgb(var(--v-theme-primary-purple));
    border-radius: 50%;
    animation: loading 1s ease forwards infinite;
}

@keyframes loading {
        from {
            transform: translate(-50%, -50%) rotate(0turn);
        }

        to {
            transform: translate(-50%, -50%) rotate(1turn);
        }
    }

</style>