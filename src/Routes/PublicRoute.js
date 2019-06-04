import React from 'react'
import {connect} from 'react-redux'
import {Route,Redirect} from 'react-router-dom'
export const PublicRoute=(
    {
        isUserLogin,
        component:Component,
        ...rest
    }
)=>(
    <Route {...rest} component={(props)=>{
        return isUserLogin ? (
            <Redirect to='/dashboard'/>

        ):(
            <Component {...props}/>
        )
    }}/>
);



const mapStateToProps=(state,props)=>{
    return{
        isUserLogin:!!state.auth.uid
    }
}
export default connect(mapStateToProps)(PublicRoute)