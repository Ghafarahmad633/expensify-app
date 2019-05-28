import uuid from "uuid";
import database from '../firebase/firebase'
// this is ADD_EXPENSE

export const addExpenses=(expense)=>({
    type:"ADD_EXPENSE",
    expense

});

export const startAddExpense=(expenseData={})=>{
    return (dispatch)=>{
        const {
            desc='',
            note='',
            createdAt=0,
            amount=0
        }=expenseData
        const expense={desc,note,createdAt,amount}
        return database.ref('expenses').push(expense)
            .then((ref)=>{
                dispatch(addExpenses({
                    id:ref.key,
                    ...expense
                }))
            })

    }
}

// this is REMOVE_EXPENSE
export const removeExpense=({id}={})=>({
    type: "REMOVE_EXPENSE",
    id

})
export const removeExpenseSelected=(id)=>({
    type:"DELETE_SELECTED",
    id
})
// This is editExpense
export const editExpense=(id,updates)=>({
    type:"EDIT_EXPENSE",
    id,
    updates

})
export const removeExpenseSelctedRange=({ids})=>({
    type:"REMOVE_EXPENSES_SELECTED_RANGE",
    ids

})