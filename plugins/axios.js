export default function({ $axios, store, redirect}){
    $axios.onRequest((config) => {
        let token = store.state.token
        if(token) { 
            config.headers.common['Authorization'] = `Bearer ${token}`
        }
        return config
    })
}