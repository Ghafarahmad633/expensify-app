import React from 'react'
import {ExpenseList} from '../../component/ExpenseList'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
test('should render ExpenseList with expenses',()=>{
    const wraper =shallow(<ExpenseList expenses={expenses}/>)
    expect(wraper).toMatchSnapshot()
})
test('should render ExpenseList with no expenses',()=>{
    const wraper =shallow(<ExpenseList expenses={[]}/>)
    expect(wraper).toMatchSnapshot()
})