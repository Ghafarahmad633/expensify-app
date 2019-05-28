import React from 'react'
import {shallow} from 'enzyme'
import {ExpensAdddPage} from '../../component/ExpensAdddPage'
import expenses from '../fixtures/expenses'

let startAddExpense,history,wraper;
beforeEach(()=>{
     startAddExpense=jest.fn()
     history={push:jest.fn()}

     wraper=shallow(<ExpensAdddPage startAddExpense={startAddExpense} history={history}/>)

})
test('should render ExpensAdddPage',()=>{

    expect(wraper).toMatchSnapshot()

})
test('should handle onSubmit',()=>{
    wraper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
})