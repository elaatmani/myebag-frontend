<template>
    <div class="pt-main">
        <v-container>
            <h2>Api Response:</h2>
            <pre>
                {{response}}
            </pre>
        </v-container>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            response: ''
        }
    },
    mounted() {
        axios.post('http://localhost:8000/auth/login', 
        {
            "email": 'yassine@gmail.com',
            "password": "123"
        }, 
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => {
            if (res.data.status == "200") {
                this.response = "you're logged"
            } else if (res.data.status == "401") {
                this.response = "Password Incorrect"
            }
        })
    }
    
}
</script>
<style>
    
</style>