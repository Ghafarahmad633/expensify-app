import React from 'react'
import {shallow} from 'enzyme'
import {ExpensEditPage} from '../../component/ExpensEditPage'
import expenses from '../fixtures/expenses'

let editExpense,startRemoveExpense,history,wraper,startEditExpense;
beforeEach(()=>{
     editExpense=jest.fn()
     startEditExpense=jest.fn()
     startRemoveExpense=jest.fn()
     history={push:jest.fn()}
     wraper=shallow(<ExpensEditPage
        editExpense={editExpense}
        startRemoveExpense={startRemoveExpense}
        startEditExpense={startEditExpense}
        history={history}
        expense={expenses[0]}
    />)
})

test('should render ExpensEditPage',()=>{

    expect(wraper).toMatchSnapshot()
})
test('should handle editExpense',()=>{
    wraper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0])

})
test('should handle startRemoveExpense',()=>{
    wraper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id:expenses[0].id
    })

})