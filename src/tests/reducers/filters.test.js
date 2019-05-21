import filterRecuers from '../../reducers/filters'

import momnet from 'moment'
test('should setup default value',()=>{
    const state=filterRecuers(undefined,{type:"@@INT"})
    expect(state).toEqual({
        text:'',
        sortBy:'',
        startDate:momnet().startOf('month'),
        endDate:momnet().endOf('month')
    })
})

test('should setup Sort By  Amount',()=>{
    const state=filterRecuers(undefined,{type:"SORT_BY_AMOUNT"})
    expect(state.sortBy).toBe("amount")
})
test('should setup Sort By  Date',()=>{
    const state=filterRecuers(undefined,{type:"SORT_BY_DATE"})
    expect(state.sortBy).toBe("date")
})

test('should setup Sort By  Date with state not defaut',()=>{
    const tempNewState={
        text:'',
        sortBy:'amount',
        startDate:momnet().startOf('month'),
        endDate:momnet().endOf('month')
    }
    const state=filterRecuers(tempNewState,{type:"SORT_BY_DATE"})
    expect(state.sortBy).toBe("date")
})

test('should setup Text filter',()=>{
    const state=filterRecuers(undefined,{type:"SET_TEXT_FILTER",text:"Rent"})
    expect(state.text).toBe("Rent")
})
test('should setup StartDate filter',()=>{
    const state=filterRecuers(undefined,
        {
            type:"SET_START_DATE",
            date:momnet()}
        )
    expect(state.startDate).toEqual(momnet())
})