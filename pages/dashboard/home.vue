<template>
    <div>
        <h3>Welcome to dashboard, {{ results.name }}</h3>
        <!-- {{ results }} <br/> -->

        <!-- {{ company }} <br/> -->
        <table class="table table-strip table-sm">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date Created</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr if="values" v-for="value in values" :key="value.id">
                    <td>{{ value.id}}</td>
                    <td>{{ value.title}}</td>
                    <td>{{ value.description}}</td>
                    <td>{{ value.created_at}}</td>
                    <td>
                        <button class="btn btn-primary btn-sm" @click="edit">Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- {{ values }} -->
    </div>
</template>

<script>
export default {
    name: 'Home',
    layout: 'new-main',
    data(){
        return{
            results: [],
            values: []
        }
    },
    created(){
        // const token = this.$store.state.token
        // if(token){
        //     this.$router.push('/dashboard/home')
        // }else{
        //     this.$router.push('/auth')
        // }
    },

    mounted(){
        this.getUser()
        this.fetchTodo()
    },
    methods: {
        getUser(){
            this.$store.dispatch('user/getUser').then((res) =>{
                this.results = res
            })
        },
        
        async fetchTodo(){
            await this.$axios.get('fetch/todo').then((res) =>{
                this.values = res.data.data
            }).catch((error) =>{
                console.log(error)
            })
        },

        edit(){
            alert('edit confirm')
        }
    }
}
</script>