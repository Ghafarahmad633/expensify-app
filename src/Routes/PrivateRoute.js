import React from 'react'
import {connect} from 'react-redux'
import {Route,Redirect} from 'react-router-dom'
import Header from '../component/Header'
export const PrivateRoute=(
    {
        isUserLogin,
        component:Component,
        ...rest
    }
    )=>(
    <Route {...rest} component={(props)=>{
        return isUserLogin ? (
            <div>
                <Header/>
                <Component {...props}/>
            </div>

        ):(<Redirect to='/'/>)
    }}/>
)



const mapStateToProps=(state,props)=>{
    return{
        isUserLogin:!!state.auth.uid
    }
}
export default connect(mapStateToProps)(PrivateRoute)