<template>
    <div>
        <h3>Welcome to Role</h3>
        <!-- {{ results }} -->
    </div>
</template>

<script>
export default {
    name: 'Role',
    layout: 'new-main',
    // middleware: 'auth',
    data(){
        return{
            // results: []
        }
    },

    created(){
        // this.$store.dispatch('user/getUser').then((res) =>{
        //     // this.results = res
        //     if(res){
        //         this.$router.push('/dashboard/role')
        //     }else{
        //         this.$router.push('/auth')
        //     }
        // }).catch((error) => {
        //     this.$router.push('/auth')
        // })
    },

    mounted(){
        // this.getUser()
    },
    methods: {
  
    }
}
</script>