import React from 'react'
import {shallow} from 'enzyme'
import {LoginPage} from '../../component/LoginPage'
import {Header} from "../../component/Header";
test('Should render correct Login Page',()=>{
    const wraper=shallow(<LoginPage startLogin={()=>{}}/>)
    expect(wraper).toMatchSnapshot()
})


test("Should start Login button Click",()=>{
    const startLogin=jest.fn()
    const wraper=shallow(<LoginPage startLogin={startLogin}/>)
    wraper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled()
})