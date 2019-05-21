import {createStore} from 'redux'
const incrementCount=({incrementBy=0,mulitplyBy=1}={})=>({
    type:"INCREMENT",
    incrementBy,
    mulitplyBy
});
const decrementCount=({decrementBy=0}={})=>({
    type:"DECREMENT",
    decrementBy,
});
const multiplyCount=({multiplyBy=1}={})=>({
    type:"MUL",
    multiplyBy,

});
const resetCount=()=>({
    type:"RESET"
});
const setCount=({setBy=0}={})=>({
    type:"SET",
    setBy
});
const countReducer=(state={count:0},actions)=>{
    switch (actions.type) {
        case 'SET':
            return{
                count:actions.setBy
            }
        case 'INCREMENT':
            return{
                count: state.count+actions.incrementBy*actions.mulitplyBy
            };
        case 'DECREMENT':

            return{
                count:state.count-actions.decrementBy
            };
        case 'MUL':

            return{
                count:state.count*actions.multiplyBy
            };
        case 'RESET':
            return{
                count:0
            };
        default:
            return state
    }

}
const store=createStore(countReducer)
const unsubs=store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy:20,mulitplyBy:22}));
store.dispatch(decrementCount({decrementBy:100}));



store.dispatch(multiplyCount({multiplyBy:10}))

store.dispatch(resetCount())

store.dispatch(setCount({setBy:10000}))