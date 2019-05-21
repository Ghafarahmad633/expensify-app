import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import ExpensifyDashboardPage from '../component/Dashboard'
import ExpensAdddPage from '../component/ExpensAdddPage'
import ExpensEditPage from '../component/ExpensEditPage'
import ExpensHelpPage from '../component/ExpensHelpPage'
import NotFoundPage from '../component/NotFoundPage'
import Header from '../component/Header'

const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route  path='/' component={ExpensifyDashboardPage} exact={true} />
                <Route  path='/create' component={ExpensAdddPage}/>
                <Route  path="/edit/:id" component={ExpensEditPage}/>
                <Route  path='/help' component={ExpensHelpPage}/>
                <Route  component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)
export default AppRouter

