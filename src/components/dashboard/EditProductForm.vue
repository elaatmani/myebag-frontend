<template>
    <LoadingDash v-if="!isLoaded" />
    <div v-if="isLoaded">
        <div class="create-btn">
            <v-btn @click="updateProduct" :loading="isLoading" class="mr-2 text-capitalize"  color="primary-purple" variant="flat"><v-icon size="large" class="mr-1">mdi-plus</v-icon> Create</v-btn>
        </div>
        <h2 class="text-h6 text-grey-darken-3">Create Product</h2>
        <div class="mt-5">
            <v-row>
                <v-col md="6">
                    <div>

                    <v-text-field v-model="name" :error="nameError !== ''" :hint="nameError" :persistent-hint="true" variant="outlined" density="compact" color="primary-purple" label="Product name" class="mb-3"></v-text-field>
                    <v-select  :items="categories" item-value="id" item-title="name" v-model="category" variant="outlined" density="compact" color="primary-purple" label="Category" class="mb-3 text-capitalize"></v-select>
                    <v-textarea v-model="desc" :error="descError !== ''" :hint="descError" :persistent-hint="true" variant="outlined" label="Description" color="primary-purple"></v-textarea>
                    </div>
                </v-col>
                <v-col md="6">
                    <div>
                    <v-text-field v-model="price" :error="priceError !== ''" :hint="priceError" :persistent-hint="true" class="mb-3" label="Price" variant="outlined" density="compact" color="primary-purple" type="number" prefix="$"></v-text-field>
                    <v-file-input id="product-images" :chips="true" :counter="true" accept="image/png, image/jpeg, image/bmp, image/webp" :multiple="true" :show-size="true" hint="3 images max." :persistent-hint="true" label="Click to upload images" variant="outlined" prepend-icon="" density="compact"  prepend-inner-icon="mdi-camera"></v-file-input>
                    <div class="mt-5 d-flex flex-wrap">
                        <ProductImage v-for="(img, key) in product.images" :key="key" :src="img" />
                    </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import LoadingDash from '@/components/dashboard/LoadingDash'
import ProductImage from '@/components/dashboard/ProductImage'
export default {
    components: {LoadingDash, ProductImage},
    emits: ['showMessage', 'changeComponent'],
    data() {
        return {
            isLoading: false,
            isLoaded: false,
            product: null,
            name: '',
            nameError: '',
            price: '10',
            priceError: '',
            desc: '',
            descError: '',
            imagesError: '',
            category: 1,
            categories: [
                { id: 1, name: 'Shoes' },
                { id: 2, name: 'Hoodies' },
                { id: 3, name: 'Watches' },
            ],
            imageRules: [
                value => { return !value || !value.length || value[0].size < 5000000 || 'Image size should be less than 5 MB!'}
            ]
        }
    },
    computed: {
        host() {
            return this.$store.state.host
        },
        productId() {
            return this.$store.getters.toEditProductId
        }
    },
    watch: {    
        productId() {
            this.isLoaded = false
            this.getProductInfo()
        }
    },
    methods: {
        validateInputs() {
            let isNameValid = false;
            let isPriceValid = false;
            let isDescValid = false;

            if(this.name.trim() === '') {
                this.nameError = 'This field is required'
                isNameValid = false
            } else {
                this.nameError = ''
                isNameValid = true
            }

            if(this.desc.trim() === '') {
                this.descError = 'This field is required'
                isDescValid = false
            } else {
                this.descError = ''
                isDescValid = true
            }

            if(this.price === '') {
                this.priceError = 'This field is required'
            } else {
                this.priceError = ''
                isPriceValid = true
            }

            return isNameValid && isPriceValid && isDescValid
        },
        updateProduct() {

            if(!this.validateInputs()) {
                return false;
            }

            let images = document.getElementById('product-images').files
            let formdata = new FormData()

            for (let image of images) {
                formdata.append('files[]', image)
                console.log(image);
            }
            let product = {
                name: this.name.trim(),
                desc: this.desc.trim(),
                price: this.price,
                category_id: this.category
            }

            formdata.append('product', JSON.stringify(product))
            

            const headers = {
                'Content-Type': 'multipart/form-data'
            }

            this.isLoading = true

            axios.post(this.host + '/product', formdata, { headers }).then(res => {
                console.log(res.data)
                this.isLoading = false
                const message = {
                    status: 'success',
                    message: 'Product created successfuly !'
                }
                this.$emit('showMessage', message, true)
            }).catch(err => {
                console.log(err)
                this.isLoading = false
                const message = {
                    status: 'failed',
                    message: 'Product not created there was a problem !',
                    error: err
                }
                this.$emit('showMessage', message, true)
            })
            // console.log(images.files);
        },
        getProductInfo() {
            if (this.$store.getters.toEditProductId === null) {
            this.$emit('changeComponent', 'dashboard')
        } else {
            axios.get(this.host + '/product?id=' +  this.$store.getters.toEditProductId ).then(
                res => {
                    console.log('product to be updated: ');
                    console.log(res.data);
                    this.name = res.data.product.name
                    this.desc = res.data.product.desc
                    this.price = res.data.product.price
                    this.category = res.data.product.category
                    this.product = res.data.product
                    this.isLoaded = true
                }
            )
        }
        }
    },
    mounted() {
        this.getProductInfo()
    }
}
</script>
<style scoped>
.create-btn {
    position: absolute;
    bottom: 20px;
    right: 15px;
}

    
</style>