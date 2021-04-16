<template>
    <div class="container">
        <template>
            <nuxt-link to="/dashboard/home" class="btn btn-primary btn-sm">Dashboard</nuxt-link> 
            <nuxt-link to="/dashboard/role" class="btn btn-primary btn-sm">Role</nuxt-link> 
            <button class="btn btn-warning btn-sm" @click.prevent="logout">logout</button>
        </template>
        <template>
            <nuxt-link to="/auth" class="btn btn-primary btn-sm">Login</nuxt-link>
        </template>
        <h2>Header of dashboard</h2>

        <nuxt />
        
    </div>
</template>

<script>
import mapState from 'vuex'
export default {
    middleware: 'authh',
    name: 'new-main',
    data(){
        return{

        }
    },
    computed: {
        // ...mapState({
        //     users: state => state.users
        // })
        loggedIn(){
            this.$store.getters('loggedInUser')
        }
    },
    created(){
        const token = this.$store.state.token
        if(token){
            this.$router.push('/dashboard/home')
        }else{
            this.$router.push('/auth')
        }
    },
    mounted(){
        // this.getUser();
    },
    methods: {
        // getUser(){
        //     this.$store.dispatch('user/getUser').then((res) =>{
        //         this.results = res
        //     })
        // },
        logout(){
            this.$store.commit('SET_TOKEN') == null;
            this.$store.commit('SET_USER') == null;
            this.$router.push('/auth')
        }
    }
}
</script>
