import {combineReducers, createStore} from "redux";
import expensesReduer from '../reducers/expenses'
import filtersReduer from '../reducers/filters'
import {deleteSeletedReducer,selectAllExpense} from '../reducers/deleteSelected'

const store=createStore(combineReducers({
    expense:expensesReduer,
    filters:filtersReduer,
    selectedToDeleted:deleteSeletedReducer,
    selectAllExpense:selectAllExpense
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store