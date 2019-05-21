import React from 'react'
import ReactDOM from 'react-dom'
const Info=(props)=>{
    return(
        <div>
            <h1>Info</h1>
            <p>This is Info: {props.info}</p>
        </div>
    )
}
const withAdminWarning=(WrapComponent)=>{
    return(props)=>(
        <div>

            {props.isAdmin && <p>This is Warning</p>}
            <WrapComponent {...props}/>
        </div>
    )
}
const adminAuthticate=(WrapComponent)=>{
    return(props)=>(
        <div>
            {props.adminAuth===true?<WrapComponent {...props}/>:(<p>Please Male Login</p>)}

        </div>
    )
}
const AdmiInfo=withAdminWarning(Info)
const AdminAuth=adminAuthticate(Info)
// ReactDOM.render(<AdmiInfo isAdmin={true} info="This is Info"/>,document.getElementById("app"))
ReactDOM.render(<AdminAuth adminAuth={true} info="This is Info"/>,document.getElementById("app"))