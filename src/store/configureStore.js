import {combineReducers, createStore,applyMiddleware,compose} from "redux";
import expensesReduer from '../reducers/expenses'
import filtersReduer from '../reducers/filters'
import {deleteSeletedReducer,selectAllExpense} from '../reducers/deleteSelected'
import thunk from 'redux-thunk'
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store=createStore(
    combineReducers({
    expense:expensesReduer,
    filters:filtersReduer,
    selectedToDeleted:deleteSeletedReducer,
    selectAllExpense:selectAllExpense
}),
    composeEnhancer(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
export default store