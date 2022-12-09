<template>
    <div class="pt-main">
        <v-container>
            <h2>Api Response:</h2>
            <form method="post" enctype="multipart/form-data" id="image_upload_form" action="submit_image.php">
                <input type="file" name="images" id="images" multiple
                    accept="image/x-png, image/gif, image/jpeg, image/jpg" />
                <v-btn variant="outlined" @click="save">Upload Files!</v-btn>
            </form>
            <pre>
                {{ response }}
            </pre>
            <div class="images" ref="im"></div>
        </v-container>
    </div>
</template>
<script>
// import axios from 'axios';
export default {
    data() {
        return {
            file: null,
            response: ''
        }
    },
    methods: {
        save() {
            var files = document.getElementById('images');
        
            // let formdata = new FormData();

            // let filereader = new FileReader();



            console.log(files.files);
            // axios.post('http://localhost:8000/upload')
            // .then(res => {
            //         this.response = res.data
            // })
        },
        showImage(path) {
            let img = document.createElement('img')
            img.setAttribute('src', path)
            this.$refs['im'].appendChild(img)
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