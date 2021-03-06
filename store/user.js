export const state = () =>({
    users: [],
    errors: [],
    authUser: false,
    api_token: null
})

export const mutations = {
    SET_USER_DATA(state, payload){
        state.users = payload
    },
    SET_AUTH_USER(state, payload){
        state.authUser = payload
    },
    SET_API_TOKEN(state, payload){
        state.api_token = payload
    },
    SET_ERRORS(state, payload){
        state.errors = payload
    }
}

export const actions = {
    NuxtServerInit({commit}, context){
        commit('SET_USER_DATA', context.app.$auth.user)
        if(context.app.$auth.$state.loggedIn){
            commit('SET_API_TOKEN', context.app.$auth.$state.user.api_token)
        }
        // console.log(context.app.$auth.$state.user)
    },

    getUserData({commit}){
        return new Promise((resolve, reject) =>{
            this.$axios.get('/users').then((response) =>{
                // console.log(response.data.data)
                commit('SET_USER_DATA', response.data.data)
                resolve()
            })
        })
    },

    async postUserData({commit}, payload){
        console.log(payload)
        // let { data } = await this.$axios.post('/users', payload);
        // return data;
    },

    // Load all user data
    async loadData({commit}){
        let { data } = await this.$axios.post('/users', payload);
        return data;
    },

    // Load data of individual user by Id
    async loadDataById({commit}, id){
        console.log(id)
        let { data } = await this.$axios.get('/users', id);
        const titles = data.map(({ title}) => title)
        return titles;
    },

    // getUserDataById({commit}, id){
    //     return new Promise((resolve, reject) =>{
    //         this.$axios.get(`/users/${id}`).then((response) =>{
    //             // console.log(response.data.data)
    //             // commit('SET_USER_DATA', response.data.data)
    //             resolve()
    //         })
    //     })
    // },
    storeUserData({dispatch, commit}, payload){
        return new Promise((resolve, reject) =>{
            this.$axios.post('/users', payload)
            .then(() =>{
                dispatch('getUserData')
                resolve()
            })
            .catch((error) =>{
                commit('SET_ERRORS', error.response.data)
            })
        })
    }
}

export const getters = {
    getUsers(state){
        return state.users
    },
    getTotal(state){
        return state.users.length
    }
}