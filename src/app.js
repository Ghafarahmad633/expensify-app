import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {startSetExpense} from './actions/expenses'
import {login,logOut} from './actions/auth'
import AppRouter,{history} from './Routes/AppRouter'
import 'normalize.css/normalize.css'
import './style/style.scss'
import 'react-dates/lib/css/_datepicker.css'
import {firebase} from './firebase/firebase'
import LoginPage from "./component/LoginPage";
import LoadingPage from "./component/LoadingPage";
const store=configureStore
const root=document.getElementById("app")
let hasRender=false;
const renderApp=()=>{
    if(!hasRender){
        ReactDOM.render(jsx,root)
        hasRender=true
    }

}
const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>

);
ReactDOM.render(<LoadingPage/>,root)



firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpense()).then(()=>{
            renderApp()
            if(history.location.pathname==='/'){
                history.push('/dashboard')
            }


        })
    }
    else{
        store.dispatch(logOut())
        renderApp()
        history.push('/')
    }

})