// Expense Reducer
const expendDefaultState=[];
export const deleteSeletedReducer=  (state=expendDefaultState,action)=>{
    switch (action.type) {
        case "PUSH_EXPENSE_TO_DELETE":
            console.log(action.id)
            return [
                ...state,
                action.id
            ]

        case "REMOVE_EXPENSE_TO_DELETE":
            return state.filter((id)=>{
                return id!==action.id
            })
        case "REFRESH_STATE_AFTER_DELETE":
            return []
        default:
            return state
    }
}
export const selectAllExpense=(state=null,action)=>{
    switch (action.type) {
        case 'SET_TRUE_SELECT_ALL':
            return state=true;
        case "SET_FALSE_SELECT_ALL":
            return state=null;
        default:
            return state

    }
}