
import momnet from 'moment'
// Filter Reducer
const filterDefault={
    text:'',
    sortBy:'',
    startDate:momnet().startOf('month'),
    endDate:momnet().endOf('month')
};
export default(state=filterDefault,action)=>{
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