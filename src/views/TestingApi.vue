<template>
    <div class="pt-main">
        <v-container>
            <h2>Api Response:</h2>
            <form method="post" enctype="multipart/form-data" id="image_upload_form" action="submit_image.php">
                <input type="file" name="images" id="images" multiple
                    accept="image/x-png, image/gif, image/jpeg, image/jpg" />
                    <input type="number" v-model="id">
                <v-btn variant="outlined" @click="save">Upload Files!</v-btn>
            </form>
            <pre>
                {{ response }}
            </pre>
            <div class="images" ref="im">
            </div>
        </v-container>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            file: null,
            response: '',
            id: 0
        }
    },
    methods: {
        save() {
            var files = document.getElementById('images');
        
            let formdata = new FormData();
            
            // let filereader = new FileReader();

            for (let file of files.files) {
                formdata.append("files[]", file)
                console.log(file);
            }

            const product = {
                name: "something",
                price: 22
            }

            formdata.append('product', JSON.stringify(product))

            // const headers = {
            //     'Content-Type': 'multipart/form-data'
            // }

            // console.log(files.files);
            // axios.post('http://api.myebag.shop', formdata, {headers})
            axios.get('http://localhost:8000/product?id=' + this.id)
            .then(res => {
                    console.log(res.data);
                    let product = res.data.product
                    for (let key of Object.keys(product.images)) {
                        this.showImage('http://localhost:8000' + product.images[key])
                    }
            })
        },
        showImage(path) {
            setTimeout(() => {

                let img = document.createElement('img')
                img.setAttribute('src', path)
                this.$refs['im'].appendChild(img)
            }, 2000)
        }
    },
    mounted() {
        // axios.post('http://localhost:8000/auth/login',
        //     {
        //         "email": 'yassine@gmail.com',
        //         "password": "123"
        //     },
        //     {
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         }
        //     })
        //     .then(res => {
        //         if (res.data.status == "200") {
        //             this.response = "you're logged"
        //         } else if (res.data.status == "401") {
        //             this.response = "Password Incorrect"
        //         }
        //     })
    }

}
</script>
<style>
</style>