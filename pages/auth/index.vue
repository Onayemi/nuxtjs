<template>
  <div>
      <form method="post" @submit.prevent="loginUser">
          <!-- loginUser -->
            <div class="form-group first">
            <label for="username">Email</label>
            <input type="text" v-model="email" class="form-control" id="email">

            </div>
            <div class="form-group last mb-4">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" id="password">
            
            </div>
            
            <div class="d-flex mb-5 align-items-center">
            <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                <input type="checkbox" checked="checked"/>
                <div class="control__indicator"></div>
            </label>
            <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span> 
            </div>

            <input type="submit" value="Log In" class="btn text-white btn-block btn-primary">
            <!-- <fa icon="envelope" /> -->

            <span class="d-block text-left my-4 text-muted"> or sign in with</span>
            
            <div class="social-login">
            <a href="#" class="facebook">
                <span class="icon-facebook mr-3"></span> 
            </a>
            <a href="#" class="twitter">
                <span class="icon-twitter mr-3"></span> 
            </a>
            <a href="#" class="google">
                <span class="icon-google mr-3"></span> 
            </a>
            </div>
      </form>
        {{ loginTesting }}
      <!-- <li v-for="user in users" :key="user.id">{{user.avatar}}</li> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex' //mapGetters
export default {
    middleware: 'guest',
    layout: 'login',
    data(){
        return {
            // auth: {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka',

            loginTesting: {
                login_Details:{
                    email: 'eve.holt@reqres.in',
                    password: 'cityslicka'
                }
            }
            // }
        }
    },
    head: {
        title: 'Login Pages'
    },
    mounted(){
        // console.log(this.$auth.loggedIn)
        if(this.$auth.loggedIn === true){
            this.$router.push('/dashboard')
        }
        // this.$router.push('/auth')
    },
    // computed: {
    //     ...mapGetters({
    //         users: 'user/getUsers',
    //         total: 'user/getTotal'
    //     })
    // },
    methods: {
        ...mapActions('user', ['postUserData','loadDataById']),
        async signUp(){
            console.log('User email', this.email)
            // this.$notify({
            //     title: 'Important message',
            //     text: 'Hello user!'
            // });
            this.postUserData({ email: this.email, password: this.password }).then(() =>{
                console.log('User email', this.email)
            }).catch((error) =>{
                console.log(error)
            })
        },

        async getUserId(id){
            this.postUserData(id).then(() =>{

                console.log(response)
            }).catch((error) =>{
                console.log(error)
            })
        },

        async loginUser(){
            try {
                const response = await this.$auth.loginWith('local', {
                    data: { email: this.email, password: this.password }
                })
                console.log(response)
                this.$router.push('/dashboard')
                // if(response.data.loggedIn === true){
                //     this.$router.replace({ name: 'dashboard'})                
                // }
            } catch (err) {
                console.log(err)
            }
        }
    }
    
}
</script>