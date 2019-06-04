
import {firebase,googleAuthProvider} from '../firebase/firebase'
export const login=(uid)=>({
    type:"LOGIN",
    uid
})


export const startLogin=()=>{
    return()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider)

    }
}
export const logOut=()=>({
    type:"LOGOUT",

});
export const startLogOut=()=>{
    console.log("startLogOut caled")
    return()=>{
        return firebase.auth().signOut()
    }
}