import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseList} from '../../component/ExpenseList'
import expenses from '../fixtures/expenses'

let addItemToDelete,removeItemToDelete,wraper;
beforeEach(()=>{
    addItemToDelete=jest.fn();
    removeItemToDelete=jest.fn();
    wraper=shallow(<ExpenseList
        addItemToDelete={addItemToDelete}
        removeItemToDelete={removeItemToDelete}
        expenses={expenses}
    />)
})

test('should render Expense list page',()=>{

    expect(wraper).toMatchSnapshot()
})

