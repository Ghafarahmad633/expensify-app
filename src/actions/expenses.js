import uuid from "uuid";
// this is ADD_EXPENSE

export const addExpenses=(
    {
        desc='',
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