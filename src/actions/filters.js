
// Filter Reducer
export const filterDefault={
    text:'',
    sortBy:'',
    startDate:undefined,
    endDate:undefined
};
// This is SET_TEXT_FILTER
export const setFiltertext=(text='')=>({
    type:"SET_TEXT_FILTER",
    text

});
// this is SORT_BY_DATE
export const sortyByDate=()=>({
    type:"SORT_BY_DATE",

});
// this is SORT_BY_AMOUNT
export const sortyByAmount=()=>({
    type:"SORT_BY_AMOUNT",

});
// this is SET_START_DATE
export const setStartDate=(date)=>({
    type:"SET_START_DATE",
    date

});
// this is SET_END_DATE
export const setEndDate=(date)=>({
    type:"SET_END_DATE",
    date

});