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
                                <p v-if="errorMsg" class="text-caption text-pink mb-n2">{{ errorMsg }}</p>
                                <div class="d-flex gap-1">

                                    <div class="w-50">
                                        <v-text-field v-model="first_name" :rules="name_rules"  :hide-details="false" color="primary-purple" class="mt-5"  variant="underlined" density="compact"  label="First Name">
                                            <template v-slot:label>
                                                <span class="text-caption mt-1">First Name</span>
                                            </template>
                                            <template v-slot:prepend-inner>
                                                <v-icon class="mt-1" color="grey-darken-4" size="small">mdi-account-outline</v-icon>
                                            </template>
                                        </v-text-field>
                                </div>
                                <div class="w-50">
                                    <v-text-field v-model="last_name" :rules="name_rules" :hide-details="false" color="primary-purple" class="mt-5" variant="underlined" density="compact"  label="Last Name">
                                        <template v-slot:label>
                                            <span class="text-caption mt-1">Last Name</span>
                                        </template>
                                        <template v-slot:prepend-inner>
                                                <v-icon class="mt-1" color="grey-darken-4" size="small">mdi-account</v-icon>
                                            </template>
                                    </v-text-field>
                                </div>
                            </div>
                                <div>
                                    <v-text-field v-model="email" :loading="emailLoading"  :error="emailExist" :rules="email_rules" @keyup="handleKeyUp(email)" :hide-details="false" color="primary-purple" class="mt-0" variant="underlined" density="compact" label="E-mail address">
                                        <template v-slot:label>
                                            <span class="text-caption mt-1">{{emailExist ? 'Email already exists' : 'E-mail address'}}</span>
                                        </template>
                                        <template v-slot:prepend-inner>
                                            <v-icon class=" mt-1" color="grey-darken-4" size="small">mdi-email-outline</v-icon>
                                        </template>
                                    </v-text-field>
                                </div>
                                
                                    <div>
                                    <v-text-field v-model="password" type="password" :rules="password_rules" :hide-details="false" color="primary-purple" class="mt-0" variant="underlined" density="compact" label="Create password">
                                        <template v-slot:label>
                                            <span class="text-caption mt-1">Create password</span>
                                        </template>
                                        <template v-slot:prepend-inner>
                                            <v-icon class="mt-1" color="grey-darken-4" size="small">mdi-lock-outline</v-icon>
                                        </template>
                                    </v-text-field>
                                </div>
                                <div>
                                    <v-text-field v-model="confirm_password" type="password" :rules="confirm_password_rules" :hide-details="false" color="primary-purple" class="mt-0" variant="underlined" density="compact" label="Create password">
                                        <template v-slot:label>
                                            <span class="text-caption mt-1">Confirm password</span>
                                        </template>
                                        <template v-slot:prepend-inner>
                                            <v-icon class="mt-1" color="grey-darken-4" size="small">mdi-lock</v-icon>
                                        </template>
                                    </v-text-field>
                                </div>
                                
                                <v-spacer class="my-2"></v-spacer>
                                <div>
                                        <v-btn size="large" :loading="isLoading" :disabled="!isFormValid" @click="signup" variant="flat" color="primary-purple" class="mt-5 w-100 align-self-end text-capitalize">Create</v-btn>
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
import axios from 'axios'
export default {
    data() {
        return {
            isLoading: false,
            emailLoading: false,
            emailRequest: null,
            emailExist: false,
            errorMsg: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: '',

            // rules to validate data
            name_rules: [
                value => !!value || 'This field is required.',
                value => value.length >= 2 || "Min 2 characters.",
                value => value.length <= 15 || "Max 15 characters.",
            ],
            email_rules: [
                value => !!value || 'Required.',
                value => (value || '').length <= 30 || 'Max 30 characters',
                value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
                }
            ],
            password_rules: [
                value => !!value || 'Password is required.',
                value => value.length >= 8 || "Min 8 characters.",
                value => value.length <= 15 || "Max 15 characters.",
            ],
            confirm_password_rules: [
                value => value == this.password || 'Passwords are not the same.'
            ]
        }
    },
    methods: {
        checkEmail(email) {
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

            axios.post(this.$store.getters.host + '/auth/email', {email}, {headers})
            .then(res => {
                this.emailExist = false
                if (res.data.message == "exist") {
                    this.emailExist = true
                } else {
                    this.emailExist = false
                }

                this.emailLoading = false
            }).catch(err => {
                this.emailLoading = false
                this.errorMsg = err.message
            }
            )
        },
        handleKeyUp(email) {
            clearTimeout(this.emailRequest)
            if (this.email_rules[2](this.email) == true) {

                this.emailLoading = true
                this.emailRequest = setTimeout(() => {
                    this.checkEmail(email)
                }, 500)
            }
        },
        signup() {
            this.errorMsg = ''
            if (this.isFormValid) {
                this.isLoading = true
                const body = {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password
                }
                const headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
                
                }
                axios.post(this.$store.getters.host + '/auth/signup', body, {
                    headers
                }).then(res => {
                    if (res.data.status == "success") {
                        this.isLoading = false
                        this.$store.dispatch('updateLogin', true)
                        this.$store.dispatch('updateUser', res.data)
                        this.$router.push('/')
                        
                    }
                }).catch(err => {
                    this.errorMsg = err.message
                    this.isLoading = false
                })
            } else {
                console.log('is not valid')
            }
        }
    },
    computed: {
        isFormValid() {
            const email = this.email_rules[2](this.email) == true
            const fname = this.name_rules[0](this.first_name) == true && this.name_rules[1](this.first_name) == true
            const lname = this.name_rules[0](this.last_name) == true && this.name_rules[1](this.last_name) == true
            const password = this.password_rules[1](this.password) == true && this.password_rules[2](this.password) == true
            const cpassword = this.confirm_password_rules[0](this.confirm_password) == true

            return  email && fname && lname && password && cpassword
        },
        isLogged() {
            return this.$store.getters.isLogged
        }
    },
    created() {
        if (this.isLogged) {
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>
.gap-1 {
    gap: 5px;
}

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
    max-width: 500px;
    min-height: 200px;
    position: relative;
    z-index: 3;
    filter: drop-shadow(0 0 20px rgba(var(--v-theme-primary-cyan), .1));
    border: .5px solid rgba(var(--v-theme-primary-cyan), .3);
}
    
</style>