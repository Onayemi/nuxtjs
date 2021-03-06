<template>
    <div class="col-lg-6">
        <div class="p-5">
            <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
            </div>
            <form class="user" @submit.prevent="loginUser">
                <div class="form-group">
                    <input type="email" class="form-control form-control-user"
                        id="email" v-model="email" aria-describedby="emailHelp"
                        placeholder="Enter Email Address...">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control form-control-user"
                        id="password" v-model="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Remember
                            Me</label>
                    </div>
                </div>
                <button type="submit" href="javascript:void(0);" class="btn btn-primary btn-user btn-block">
                    Login
                </button>
                <hr>
                <a href="index.html" class="btn btn-google btn-user btn-block">
                    <i class="fab fa-google fa-fw"></i> Login with Google
                </a>
                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                    <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                </a>
            </form>
            <hr>
            <div class="text-center">
                <a class="small" href="forgot-password.html">Forgot Password?</a>
            </div>
            <div class="text-center">
                <a class="small" href="register.html">Create an Account!</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'login',
    data(){
        return {
            // auth: {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
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
    },
    methods: {
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