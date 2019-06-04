import React from 'react'
import {shallow } from 'enzyme'
import {startLogOut,startLogin} from '../../actions/auth'

import {Header} from '../../component/Header'
test("Should Setup the Header Correctly",()=>{
    const wraper=shallow (<Header startLogOut={()=>{}}/>)
    expect(wraper).toMatchSnapshot()
    // expect(wraper.find('h1').text()).toBe("Expensifiy")    // const renderer=new RectShallowRenderer();
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})


test("Should start logout n button Click",()=>{
    const startLogOut=jest.fn()
    const wraper=shallow(<Header startLogOut={startLogOut}/>)
    wraper.find('button').simulate('click')
    expect(startLogOut).toHaveBeenCalled()
})