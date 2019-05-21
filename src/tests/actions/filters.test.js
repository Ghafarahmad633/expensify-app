import {setFiltertext,sortyByDate,sortyByAmount,setStartDate,setEndDate} from '../../actions/filters'
import momnet from 'moment'
test('should set Stat date',()=>{
    const action=setStartDate(momnet(0))
    expect(action).toEqual({
        type:"SET_START_DATE",
        date:momnet(0)
    })
})

test('should set End date',()=>{
    const action=setEndDate(momnet(0));
    expect(action).toEqual({
        type:"SET_END_DATE",
        date:momnet(0)
    })
})
test('setup setFilterText',()=>{
    const actipn=setFiltertext("Rent");
    expect(actipn).toEqual({
        type:"SET_TEXT_FILTER",
        text:"Rent"
    })
})
test('setup setFilterText default value',()=>{
    const actipn=setFiltertext("");
    expect(actipn).toEqual({
        type:"SET_TEXT_FILTER",
        text:expect.any(String)
    })
})
test('setup sortByAmount ',()=>{
    const action=sortyByAmount(1000);
    expect(action).toEqual({
        type:"SORT_BY_AMOUNT"
    })
})
test('setup sortByDate ',()=>{
    const action=sortyByDate(1000);
    expect(action).toEqual({
        type:"SORT_BY_DATE"
    })
})