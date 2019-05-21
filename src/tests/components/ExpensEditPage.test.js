import React from 'react'
import {shallow} from 'enzyme'
import {ExpensEditPage} from '../../component/ExpensEditPage'
import expenses from '../fixtures/expenses'

let editExpense,removeExpense,history,wraper
beforeEach(()=>{
     editExpense=jest.fn()
     removeExpense=jest.fn()
     history={push:jest.fn()}
     wraper=shallow(<ExpensEditPage
        editExpense={editExpense}
        removeExpense={removeExpense}
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
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0])

})
test('should handle removeExpense',()=>{
    wraper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(removeExpense).toHaveBeenLastCalledWith({
        id:expenses[0].id
    })

})