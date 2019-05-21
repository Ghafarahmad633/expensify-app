import React from 'react'
import {shallow} from 'enzyme'
import {ExpensAdddPage} from '../../component/ExpensAdddPage'
import expenses from '../fixtures/expenses'

let addExpenses,history,wraper;
beforeEach(()=>{
    addExpenses=jest.fn()
     history={push:jest.fn()}
     wraper=shallow(<ExpensAdddPage addExpenses={addExpenses} history={history}/>)
})
test('should render ExpensAdddPage',()=>{

    expect(wraper).toMatchSnapshot()

})
test('should handle onSubmit',()=>{
    wraper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(addExpenses).toHaveBeenLastCalledWith(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
})