import {Link} from "react-router-dom";
import React from "react";

const NotFoundPage=()=>(
    <div>
        <h1>Not Found!!</h1>
        <Link to="/">Go to Home</Link>
        <Link to="/help">Go to Help</Link>
    </div>
)
export default NotFoundPage