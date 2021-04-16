<template>
  <div>
    <!-- <app-nav></app-nav> -->
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
            <h2>Dashboard</h2>
            <ol>
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li>Dashboard</li>
                <button @click="logout" class="btn btn-primary">Logout</button>
                <!-- <button @click="addSubmit" class="btn btn-primary">check</button> -->
            </ol>
            </div>

        </div>
    </section><!-- End Breadcrumbs -->
    <div class="container">
        <h3>Dashboard Page !!!!! Required Login</h3>
        <!-- <p v-for="data in getUserData" :key="data.id">{{ data.avatar}}</p> -->
        <!-- <h1>Welcome {{ users.first_name}},</h1> -->
        <p v-for="user in users" :key="user.id">
            Welcome: {{ user.name}}<br/>
            Email: {{ user.email}}<br/>
            Customer name: {{ user.name}}<br/>
        </p>
        <!-- {{ users }} -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import Nav from '@/components/layout/nav'
    export default {
        name: 'Dashboard',
        // components: {
        //     'app-nav': Nav
        // },
        // layout: 'main',
        // middleware: 'auth',
        // async asyncData({ store }){
        //     await Promise.all([
        //         store.dispatch('user/getUserData')
        //     ])
        //     return
        // },
        computed: {
            ...mapState('user', {
                users: state => state.users
            })

        },
        mounted(){
            // console.log(users)
            // this.getUserData();
            // console.log(this.$nuxt.$auth.getToken('local'))
        },
        methods:{
            // ...mapActions('user', ['getUserDataById']), //, 'storeUserData'
            addSubmit(){

                // this.getUserDataById()
            //     // console.log('testing')
            },
            
            logout(){
                this.$store.commit('SET_TOKEN') == null;
                this.$store.commit('SET_USER') == null;
                this.$router.push('/auth')
            }
        }
    }
</script>

<style>

</style>