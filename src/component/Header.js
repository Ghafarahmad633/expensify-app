import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

import {startLogOut} from '../actions/auth';


export const Header=({startLogOut,isUserLogin})=>(
    <div className='header'>
        <div className='content-continer'>

            <div className='header__content'>
                <Link className='header__title'  to="/dashboard"><h1>Expensifiy</h1></Link>
                <button className='button button__link' onClick={startLogOut}>Logout</button>
            </div>
        </div>

    </div>
)
const mapDispatchToProps=(dispatch)=>{
    return{
        startLogOut:()=>dispatch(startLogOut()),
    }
}

export default connect(undefined,mapDispatchToProps)(Header)