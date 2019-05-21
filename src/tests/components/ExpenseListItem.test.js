import React from 'react'
import {ExpenseListItem} from '../../component/ExpenseListItem'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'

test('Should setup expense list item',()=>{
    const wraper=shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wraper).toMatchSnapshot()
})