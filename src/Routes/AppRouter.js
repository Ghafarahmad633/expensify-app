import {Router, Route, Switch} from "react-router-dom";
import React from "react";
import {connect} from 'react-redux'
import ExpensifyDashboardPage from '../component/Dashboard'
import ExpensAdddPage from '../component/ExpensAdddPage'
import ExpensEditPage from '../component/ExpensEditPage'
import ExpensHelpPage from '../component/ExpensHelpPage'
import NotFoundPage from '../component/NotFoundPage'
import LoginPage from '../component/LoginPage'
import {createBrowserHistory} from 'history'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import {Header} from "../component/Header";
export const history=createBrowserHistory()
export const AppRouter=({isUserLogin})=>(
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute  path='/' component={LoginPage} exact={true} />
                <PrivateRoute  path='/dashboard' component={ExpensifyDashboardPage} />
                <PrivateRoute  path='/create' component={ExpensAdddPage}/>
                <PrivateRoute  path="/edit/:id" component={ExpensEditPage}/>
                <Route  component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)
const mapStateToProps=(state)=>{
    return{
        isUserLogin:!!state.auth.uid
    }
}
export default connect(mapStateToProps)(AppRouter)

