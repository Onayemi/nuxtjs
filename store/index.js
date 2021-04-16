import axios from 'axios'
export const state = () =>({
    isAuth: false,
    // api_token: null
    access_token: null,
    token: null,
    users: {},
    errors: [],
})

export const mutations = {
    SET_IS_AUTH(state, payload){
        state.isAuth = payload
    },
    SET_API_TOKEN(state, payload){
        state.access_token = payload
    },
    SET_TOKEN(state, payload){
        state.token = payload
    },
    SET_USER(state, payload){
        state.users = payload
    },
    SET_ERRORS(state, payload){
        state.errors = payload
    }
}

export const actions = {
    nuxtServerInit({commit}, context){
        // console.log(context.app.$auth.$state.loggedIn)
        // commit('SET_IS_AUTH', context.app.$auth.$state.loggedIn)
        // if(context.app.$auth.$state.loggedIn){
        //     commit('SET_API_TOKEN', context.app.$auth.$state.access_token)
        // }
    },
    // NuxtServerInit({dispatch}, context){
    //     dispatch('user/getUserData')
    // },

    async getUser({commit}){
        let { data } = await this.$axios.get('/me');
        return data;
    },
}

export const getters = {
    isAuthenticated(state){
        return state.users
    },
    loggedInUser(state){
        return state.token
    },
    // getUser(state){
    //     return state.users
    // }
}