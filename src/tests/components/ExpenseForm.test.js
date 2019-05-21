import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../component/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'
test('should setup expense form',()=>{
    const wraper=shallow(<ExpenseForm/>)
    expect(wraper).toMatchSnapshot()
})
test("should setup expense form with data",()=>{
    const wraper=shallow(<ExpenseForm expense ={expenses[0]}/>)
    expect(wraper).toMatchSnapshot()
})
test('should render error with invalid form submission',()=>{
    const wraper=shallow(<ExpenseForm/>)
    expect(wraper).toMatchSnapshot()
    wraper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wraper.state('error').length).toBeGreaterThan(0)
    expect(wraper).toMatchSnapshot()
})

test('should set desc on input change',()=>{
    const value='Decsription'
    const wraper=shallow(<ExpenseForm/>)
    wraper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wraper.state('decs')).toBe(value)
})
test('should set Note on input change',()=>{
    const value='Note is Changed now'
    const wraper=shallow(<ExpenseForm/>)
    expect(wraper).toMatchSnapshot()
    wraper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wraper.state('note')).toBe(value)
    expect(wraper).toMatchSnapshot()
})

test('should set Amount on input change',()=>{
    const value='333.43'
    const wraper=shallow(<ExpenseForm/>)
    wraper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wraper.state('amount')).toBe(value)
})
test('should set Amount on input change if value is invalid',()=>{
    const value='333.434444'
    const wraper=shallow(<ExpenseForm/>)
    wraper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wraper.state('amount')).toBe('')
})

test('should Call onSubmit on valid data submission',()=>{
    const onSubmitSpiy=jest.fn();
    onSubmitSpiy()
    const wraper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpiy}/>)
    wraper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wraper.state('error')).toBe('')
    expect(onSubmitSpiy).toHaveBeenLastCalledWith({
        desc:expenses[0].desc,
        amount:expenses[0].amount,
        createdAt:expenses[0].createdAt,
        note:expenses[0].note
    })

})

test('should set new date on date change',()=>{
    const now=moment();
    const wraper=shallow(<ExpenseForm/>)
    wraper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wraper.state('createdAt')).toEqual(now)

})

test('should set Focused on date change',()=>{
    const focused=true
    const wraper=shallow(<ExpenseForm/>)
    wraper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wraper.state('calendarFocused')).toBe(focused)

})