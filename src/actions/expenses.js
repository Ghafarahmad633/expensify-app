import uuid from "uuid";
import database from '../firebase/firebase'
// this is ADD_EXPENSE

export const addExpenses=(expense)=>({
    type:"ADD_EXPENSE",
    expense

});

export const startAddExpense=(expenseData={})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        const {
            desc='',
            note='',
            createdAt=0,
            amount=0
        }=expenseData
        const expense={desc,note,createdAt,amount}
        return database.ref(`users/${uid}/expenses`).push(expense)
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
export const startRemoveExpense=({id})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove()
            .then(()=>{
                dispatch(removeExpense({id}))
            })
    }
}
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
export const startEditExpense=(id,updates)=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid
       return database.ref(`users/${uid}/expenses/${id}`).update({
            ...updates
        }).then(()=>{
            dispatch(editExpense(id,updates))
       })
    }
}
export const removeExpenseSelctedRange=({ids})=>({
    type:"REMOVE_EXPENSES_SELECTED_RANGE",
    ids

})

export const startRemoveExpenseSelctedRange=({ids})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid
        const objectToIds={}
        ids.forEach((id)=>{
            objectToIds[id]=null
        })
        return database.ref(`users/${uid}/expenses`).update(objectToIds).then(()=>{
            dispatch(removeExpenseSelctedRange({ids}))
        })
    }
}

export const setExpense=(expenses)=>({
    type:"SET_EXPENSES",
    expenses
})
export const startSetExpense=()=>{
    return(dispatch,getState)=>{
        const uid=getState().auth.uid
       return database.ref(`users/${uid}/expenses`).once('value')
            .then((snapshot)=>{
                const expenses=[]
                snapshot.forEach((childSnaphot)=>{
                    expenses.push({
                        id:childSnaphot.key,
                        ...childSnaphot.val()
                    })
                })
                dispatch(setExpense(expenses))
            })

    }
}