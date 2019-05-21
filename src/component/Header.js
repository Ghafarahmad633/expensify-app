import {NavLink} from "react-router-dom";
import React from "react";

const Header=()=>(
    <div>
        <h1>Expensifiy</h1>
        <NavLink  activeClassName='is_active' to="/" exact={true}>Dashboard</NavLink>
        <NavLink  activeClassName='is_active' to="/create">Create Page</NavLink>

        <NavLink  activeClassName='is_active' to="/help">Help Page</NavLink>
    </div>
)
export default Header