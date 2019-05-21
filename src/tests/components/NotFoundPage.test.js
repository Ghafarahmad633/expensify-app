import React from 'react'
import NotFoundPage from '../../component/NotFoundPage'
import {shallow} from 'enzyme'
test('should render ExpenseList with expenses',()=>{
    const wraper =shallow(<NotFoundPage/>)
    expect(wraper).toMatchSnapshot()
})