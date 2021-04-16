<template>
  <div>
      <form method="post" @submit.prevent="loginUser">
          <!-- loginUser -->
            <div v-if="errors" class="alert alert-danger" role="alert">
                {{ errors }}
            </div>
            <div class="form-group first">
                <label for="username">Email</label>
                <input type="text" v-model="email" class="form-control" id="email">
                <!-- <input type="text" v-model="email" class="form-control" :class="{'is_invalid': errors.email}" id="email"> -->
                <!-- <p class="text-danger" v-if="errors"> {{errors.email[0] }}</p> -->
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
import axios from 'axios'
import { mapActions } from 'vuex' //mapGetters
export default {
    name: 'auth',
    // middleware: 'guest',
    layout: 'login',
    data(){
        return {
            // data: {
                email: 'onayemi18@gmail.com',
                password: 'light80',
            // },

            loginTesting: {
                login_Details:{
                    email: 'eve.holt@reqres.in',
                    password: 'cityslicka'
                }
            },
            errors: '',
            message: ''
            // }
        }
    },
    head: {
        title: 'Login Pages'
    },
    mounted(){
        // console.log(this.$auth.$storage._state)
        // console.log(this.$nuxt.$auth.getToken('local'))
        // if(this.$auth.loggedIn === true){
        //     this.$router.push('/dashboard/home')
        // }
    },
    // computed: {
    //     // ...mapGetters({
    //     //     users: 'user/getUsers',
    //     //     total: 'user/getTotal'
    //     // })
    //     // ...mapState('user', {
    //     //     errors: state => state.errors
    //     // })
    // },
    created(){

    },

    methods: {
        // ...mapActions('user', ['postUserData','loadDataById']),
        // ...mapActions(['doLogin']),
        async signUp(){
            this.postUserData({ email: this.email, password: this.password }).then(() =>{
                console.log('User email', this.email)
            }).catch((error) =>{
                console.log(error)
            })
        },

        // async getUserId(id){
        //     this.postUserData(id).then(() =>{

        //         console.log(response)
        //     }).catch((error) =>{
        //         console.log(error)
        //     })
        // },

        async loginUser(){
            await this.$axios.post('login', {
                email: this.email,
                password: this.password
            }).then((response) =>{
                if(response){
                    this.$store.commit('SET_TOKEN', response.data.access_token)
                    this.$store.commit('SET_USER', JSON.stringify(response.data.data)) //JSON.stringify(obj)
                    this.$router.push('/dashboard/home');
                }
                this.errors = ''
            }).catch((error) =>{
                console.log(error);
                this.errors = 'Invalid Username/Password!'
            })
        }
    }
    
}
</script>