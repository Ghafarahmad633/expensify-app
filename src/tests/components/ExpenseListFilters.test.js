import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../component/ExpenseListFilters'
import {filters,altFilters} from "../fixtures/filters";
import expenses from '../fixtures/expenses'
import moment from "moment";
let sortyByDate,sortyByAmount,setFiltertext,setStartDate,setEndDate,wraper,removeExpenseSelctedRange,refereshStateAfterDelete,startRemoveExpenseSelctedRange

beforeEach(()=>{
    sortyByDate=jest.fn();
    sortyByAmount=jest.fn();
    setFiltertext=jest.fn();
    setStartDate=jest.fn();
    setEndDate=jest.fn();
    removeExpenseSelctedRange=jest.fn();
    refereshStateAfterDelete=jest.fn();
    startRemoveExpenseSelctedRange=jest.fn()

    wraper=shallow(<ExpenseListFilters
        filters={filters}
        expenses={expenses}
        selectedToDeleted={[]}
        sortyByDate={sortyByDate}
        sortyByAmount={sortyByAmount}
        setFiltertext={setFiltertext}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        removeExpenseSelctedRange={removeExpenseSelctedRange}
        refereshStateAfterDelete={refereshStateAfterDelete}
        startRemoveExpenseSelctedRange={startRemoveExpenseSelctedRange}
    />)

})
test('should render expense list filter',()=>{
    expect(wraper).toMatchSnapshot()
})
test('should render expense list filter with alt data',()=>{
    wraper.setProps({
        filters:altFilters
    })
    expect(wraper).toMatchSnapshot()
})

test('should handle text change filter',()=>{
    const value="gas"
    wraper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(setFiltertext).toHaveBeenLastCalledWith(value)
})
test('should handle sort by amount filter ',()=>{
    const value='amount'
    wraper.setProps({
        filters:altFilters
    })
    wraper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortyByAmount).toHaveBeenCalled()
})
test('should handle sort by date filter ',()=>{
    const value='date'
    wraper.setProps({
        filters:altFilters
    })
    wraper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortyByDate).toHaveBeenCalled()
})
test('should handle Date Change Filter ',()=>{
    const startDate=moment(0).add(4,'years')
    const endDate=moment(0).add(4,'years')
    wraper.find('DateRangePicker').prop('onDatesChange')({
        startDate,
        endDate
    })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})
test('should handle onFocusChange in datepciker ',()=>{
    const calendarFocused="endDate"
    wraper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wraper.state('calendarFocused')).toBe(calendarFocused)


})
test('should handle Delected Selected Filter ',()=>{
    wraper.find('input').at(1).simulate('click')
    expect(startRemoveExpenseSelctedRange).toHaveBeenCalled()
})