export const addItemToDelete=({id})=>({
    type:"PUSH_EXPENSE_TO_DELETE",
    id
})
export const removeItemToDelete=({id})=>({
    type:"REMOVE_EXPENSE_TO_DELETE",
    id
})
export const refereshStateAfterDelete=()=>({
    type:"REFRESH_STATE_AFTER_DELETE",
})
export const setTrueSelectAll=()=>({
    type:"SET_TRUE_SELECT_ALL"
})
export const setFalseSelectAll=()=>({
    type:"SET_FALSE_SELECT_ALL"
})