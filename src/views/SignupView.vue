<template >
    <div class="pt-main bg-blue-lighten-4">
        <v-container class="px-md-0 login-container">
            <div  class="bg-white rounded-lg py-md-12 pt-5 pb-5"> 

                <v-row class="py-0">
                    <v-col cols="12" md="6" class="position-relative circle py-0 mb-5">
                        <div class="h-100 w-100 d-flex flex-column align-center justify-center text-center text-grey-darken-4 z-1">
                            <p class="text-1 position-relative text-md-h4 text-h5 my-2 mt-10  mb-md-7">Welcome to My Ebag</p>
                            <p class="text-2 position-relative text-caption text-md-body-1 text-primary-purple">Let your shopping journey begin !</p>

                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="pa-3 form-container d-flex align-center justify-center mt-n5">
                            <div class="form bg-white  rounded-lg px-5 py-5  px-md-8 d-flex flex-column">
                                <p class="text-h6 text-grey-darken-3 mb-1">Get Started</p>
                                <p class="text-caption text-grey-darken-2  mb-2">Use your email to create an account.</p>
                                <div>
                                    <v-text-field :hide-details="true" color="primary-purple" class="mt-5" counter="25" variant="underlined" density="compact"  label="First Name">
                                        <template v-slot:label>
                                            <span class="text-caption mt-1">First Name</span>
                                        </template>
                                        <template v-slot:prepend-inner>
                                            <v-icon class="mt-1" color="grey-darken-4" size="small">mdi-account-outline</v-icon>
                                        </template>
                                    </v-text-field>
                                </div>
                                <div>
                                    <v-text-field :hide-details="true" color="primary-purple" class="mt-5" counter="25" variant="underlined" density="compact"  label="Last Name">
                                        <template v-slot:label>
                                            <span class="text-caption mt-1">Last Name</span>
                                        </template>
                                        <template v-slot:prepend-inner>
                                            <v-icon class="mt-1" color="grey-darken-4" size="small">mdi-account-outline</v-icon>
                                        </template>
                                    </v-text-field>
                                </div>
                                <div>
                                    <v-text-field :hide-details="true" color="primary-purple" class="mt-5" counter="25" variant="underlined" density="compact" label="E-mail address">
                                        <template v-slot:label>
                                            <span class="text-caption mt-1">E-mail address</span>
                                        </template>
                                        <template v-slot:prepend-inner>
                                            <v-icon class=" mt-1" color="grey-darken-4" size="small">mdi-email-outline</v-icon>
                                        </template>
                                    </v-text-field>
                                </div>
                                <div>
                                    <v-text-field :hide-details="true" color="primary-purple" class="mt-5" counter="25" variant="underlined" density="compact" label="Create password">
                                        <template v-slot:label>
                                            <span class="text-caption mt-1">Create password</span>
                                        </template>
                                        <template v-slot:prepend-inner>
                                            <v-icon class="mt-1" color="grey-darken-4" size="small">mdi-lock-outline</v-icon>
                                        </template>
                                    </v-text-field>
                                </div>
                                <v-spacer class="my-2"></v-spacer>
                                <div>
                                        <v-btn size="large" variant="flat" color="primary-purple" class="mt-5 w-100 align-self-end text-capitalize">Create</v-btn>
                                        <p class="text-center text-body-2 mt-2 mb-5">Already have an account ? <router-link to="/login">Log in</router-link></p>
                                </div>
                            </div>
                        </div>
                        
                    </v-col>
                </v-row>
            </div>
        </v-container>
  </div>
</template>
<script>
export default {
    mounted() {
        // fetch('http://localhost:3000/index.php').then(res => res.json()).then(data => console.log(data))
    }
}
</script>
<style scoped>


.text-1::after {
    content: '';
    position: absolute;
    top: -50px;
    left: -80px;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: rgba(var(--v-theme-primary-purple), .5);
    filter: drop-shadow(0 0 10px rgba(var(--v-theme-primary-purple), .4));
}

@media screen and (max-width: 960px) {
    .text-1::after {
        top: -25px ;
    }

    
    .circle::after {
        display: none;
    }

    .form-container {
        min-width: 100% !important;
    }
}

.text-1::before {
    content: '';
    position: absolute;
    top: -25px;
    right: -80px;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: rgba(var(--v-theme-primary-cyan), .5);
    filter: drop-shadow(0 0 10px rgba(var(--v-theme-primary-cyan), .4));
}

.z-1 {
    position: relative;
    z-index: 2;
}


.circle::after {
    z-index: 0;
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    height: 320px;
    border-radius: 50%;
    border: 15px solid rgba(var(--v-theme-primary-cyan), .1);
}
.login-container {
    min-height: 450px;
}

.form-container {
    min-height: 450px;
    min-width: 400px;
}

.form {
    width: 100%;
    max-width: 380px;
    min-height: 200px;
    position: relative;
    z-index: 3;
    filter: drop-shadow(0 0 20px rgba(var(--v-theme-primary-cyan), .1));
    border: .5px solid rgba(var(--v-theme-primary-cyan), .3);
}
    
</style>