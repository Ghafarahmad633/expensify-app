import {combineReducers, createStore,applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk'
import expensesReduer from '../reducers/expenses'
import filtersReduer from '../reducers/filters'
import authReducer from '../reducers/auth'
import {deleteSeletedReducer,selectAllExpense} from '../reducers/deleteSelected'

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store=createStore(
    combineReducers({
        auth:authReducer,
    expense:expensesReduer,
    filters:filtersReduer,
    selectedToDeleted:deleteSeletedReducer,
    selectAllExpense:selectAllExpense,


}),
    composeEnhancer(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
export default store