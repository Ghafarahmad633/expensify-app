// Expense Reducer
const expendDefaultState=[];
export default  (state=expendDefaultState,action)=>{
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter(({id,note,desc})=>{
                console.log("Remove "+id)
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
            });
        case "REMOVE_EXPENSES_SELECTED_RANGE":
            return state.filter((exp)=>{
                return !action.ids.includes(exp.id)
            });
        case 'SET_EXPENSES':
            return action.expenses
        default:
            return state
    }
}