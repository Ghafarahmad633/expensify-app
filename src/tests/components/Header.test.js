import React from 'react'
import {shallow } from 'enzyme'

import Header from '../../component/Header'
test("Should Setup the Header Correctly",()=>{
    const wraper=shallow (<Header/>)
    expect(wraper).toMatchSnapshot()
    // expect(wraper.find('h1').text()).toBe("Expensifiy")    // const renderer=new RectShallowRenderer();
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})
