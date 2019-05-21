import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {addExpenses} from './actions/expenses'
import {setFiltertext, sortyByDate,sortyByAmount} from "./actions/filters";
import getVisibleExpenses from './selectors/expenses'
import AppRouter from './Routes/AppRouter'
import 'normalize.css/normalize.css'
import './style/style.scss'
import 'react-dates/lib/css/_datepicker.css'

const store=configureStore
store.dispatch(addExpenses({desc:"This is Gas Bill",note:"This need to Pay",createdAt:1000,amount:30000}))
store.dispatch(addExpenses({desc:"This is Home Rent ",note:"This Done",createdAt:500,amount:5000000}))
store.dispatch(sortyByAmount())
const state=store.getState();
console.log(state)
const visibleExpemses=getVisibleExpenses(state.expense,state.filters)
const root=document.getElementById("app")
const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>

);
ReactDOM.render(jsx,root)
