import React from 'react'
import Dashboard from '../../component/Dashboard'
import {shallow} from 'enzyme'
import {ExpenseList} from "../../component/ExpenseList";
import expenses from "../fixtures/expenses";
test('should render Dashboard page',()=>{
    const wraper =shallow(<Dashboard/>)
    expect(wraper).toMatchSnapshot()
})