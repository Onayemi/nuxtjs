export default function({app, redirect}){
    let token = app.store.state.token
    // console.log(token);
    if(!token){
        return redirect('/auth')
    }
}