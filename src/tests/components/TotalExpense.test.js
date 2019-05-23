import React from 'react'
import {shallow} from 'enzyme'
import {TotalExpense} from '../../component/TotalExpense'
test('Should correctly Expense Summary with one expense',()=>{
    const wraper=shallow(<TotalExpense expenseToal={134} expnseCount={1}/>)
    expect(wraper).toMatchSnapshot()
})

test('Should correctly Expense Summary with multiple expense',()=>{
    const wraper=shallow(<TotalExpense expenseToal={2454543} expnseCount={23}/>)
    expect(wraper).toMatchSnapshot()
})