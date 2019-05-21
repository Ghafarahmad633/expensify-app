import {createStore,combineReducers} from 'redux'
import uuid from 'uuid'
// this is ADD_EXPENSE
const addExpenses=(
    {desc='',
        note='',
        createdAt=0,
        amount=0
    }={}
    )=>({
    type:"ADD_EXPENSE",
    expense:{
        id:uuid(),
        desc,
        note,
        createdAt,
        amount
    }

});

// this is REMOVE_EXPENSE
const removeExpense=({id}={})=>({
    type: "REMOVE_EXPENSE",
    id

})

// This is editExpense
const editExpense=(id,updates)=>({
    type:"EDIT_EXPENSE",
    id,
    updates

})
// Expense Reducer
const expendDefaultState=[];
const expenseReducer=(state=expendDefaultState,action)=>{
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter(({id,note,desc})=>{
                return id!==action.id
            });
        case "EDIT_EXPENSE":
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense
                }
            })

        default:
            return state
    }
}
// Filter Reducer
const filterDefault={
    text:'',
    sortBy:'',
    startDate:undefined,
    endDate:undefined
};
// This is SET_TEXT_FILTER
const setFiltertext=(text)=>({
    type:"SET_TEXT_FILTER",
    text

});
// this is SORT_BY_DATE
const sortyByDate=()=>({
    type:"SORT_BY_DATE",

});
// this is SORT_BY_AMOUNT
const sortyByAmount=()=>({
    type:"SORT_BY_AMOUNT",

});
// this is SET_START_DATE
const setStartDate=(date)=>({
    type:"SET_START_DATE",
    date

});
// this is SET_END_DATE
const setEndDate=(date)=>({
    type:"SET_END_DATE",
    date

});
const filterReducer=(state=filterDefault,action)=>{
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text:action.text
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy:"date"
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy:"amount"
            };
        case "SET_START_DATE":
            return{
                ...state,
                startDate:action.date
            };
        case "SET_END_DATE":
            return{
                ...state,
                endDate:action.date
            }
        default:
            return state
    }
};
// Get Visible

const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    console.log(sortBy)
    return expenses.filter((exepnse)=>{
         const startDateMatch = typeof startDate!=='number' || exepnse.createdAt>=startDate;
        const endDateMatch =typeof endDate!=='number'|| exepnse.createdAt<=endDate;

        const textmatch =exepnse.desc.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textmatch


    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt?1:-1
        }
        else if(sortBy==='amount'){
            return a.amount<b.amount?1:-1
        }
    })

}
const store=createStore(combineReducers({
    expense:expenseReducer,
    filters:filterReducer,
}))
store.subscribe(()=>{
    const state=store.getState();
    const visibileExpense=getVisibleExpenses(state.expense,state.filters)
    console.log(visibileExpense)
})
const addExpenseOne=store.dispatch(addExpenses({desc:"Rent",note:"This is Rent for this Month",amount:1000,createdAt:1000}))
const addExpensethree=store.dispatch(addExpenses({desc:"Rentall",note:"This is Rent for this March",amount:2000,createdAt:-11000}))
const addExpenseTow=store.dispatch(addExpenses({desc:"radial",note:"This is Rent for this Not Month",amount:3000,createdAt:-1000}))
// store.dispatch(removeExpense({id:addExpenseOne.expense.id}))
// store.dispatch(editExpense(addExpenseTow.expense.id,{amount:60000,note:"This Not Changed"}))
// store.dispatch(setFiltertext("r"));
// store.dispatch(setFiltertext("Filter Text Changed Again"));
store.dispatch(sortyByAmount())
// store.dispatch(sortyByDate())
// store.dispatch(setStartDate(1000))
// store.dispatch(setEndDate(10000))
const demoStore={
    expenses:[
        {
            id:"jhsdj",
            desc:"March Renet",
            note:"This is fninal Note payment ",
            amount:4244,
            createAt:122

        }
    ],
    filters:{
        text:'rent',
        sortyBy:'',
        startDate:undefined,
        endDate:undefined
    }
}
