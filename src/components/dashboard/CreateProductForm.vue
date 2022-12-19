<template>
    <div>
        <div class="create-btn">
            <v-btn @click="sendImages" class="mr-2 text-capitalize"  color="primary-purple" variant="flat"><v-icon size="large" class="mr-1">mdi-plus</v-icon> Create</v-btn>
        </div>
        <h2 class="text-h6 text-grey-darken-3">Create Product</h2>
        <div class="mt-5">
            <v-row>
                <v-col md="6">
                    <v-text-field variant="outlined" density="compact" color="primary-purple" label="Product name"></v-text-field>
                    <v-select :items="categories" v-model="category" variant="outlined" density="compact" color="primary-purple" label="Category" ></v-select>
                    <v-textarea variant="outlined" label="description" color="primary-purple"></v-textarea>
                </v-col>
                <v-col md="6">
                    <v-text-field label="Price" variant="outlined" density="compact" color="primary-purple" model-value="10.00" prefix="$"></v-text-field>
                    <v-file-input id="product-images" :chips="true" :counter="true" accept="image/png, image/jpeg, image/bmp, image/webp" :multiple="true" :show-size="true" hint="Max 3 files" :persistent-hint="true" label="Click to upload images" variant="outlined" prepend-icon="" density="compact"  prepend-inner-icon="mdi-camera"></v-file-input>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            category: 'Hoodies',
            categoriesList: [
                { id: 1, name: 'Hoodies' },
                { id: 2, name: 'Shoes' },
                { id: 3, name: 'Watches' },
            ],
            imageRules: [
                value => { return !value || !value.length || value[0].size < 5000000 || 'Image size should be less than 5 MB!'}
            ]
        }
    },
    computed: {
        categories() {
            return this.categoriesList.map(item => item.name)
        },
        host() {
            return this.$store.state.host
        }
    },
    methods: {
        sendImages() {
            let images = document.getElementById('product-images').files
            let formdata = new FormData()

            for (let image of images) {
                formdata.append('files[]', image)
                console.log(image);
            }
            let product = {
                name: 'Test',
                desc: 'Test',
                price: 0,
                category_id: 1
            }

            formdata.append('product', JSON.stringify(product))
            

            const headers = {
                'Content-Type': 'multipart/form-data'
            }

            axios.post(this.host + '/product', formdata, { headers }).then(res => {
                console.log(res.data)
            })

            // console.log(images.files);
        }
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