import {startLogin,startLogOut,login,logOut} from '../../actions/auth'
test('Should render Login ',()=>{
    const uid='334ff'
    const action=login(uid)
    expect(action).toEqual({
        type:"LOGIN",
        uid
    })
})

test('Should render logout ',()=>{

    const action=logOut()
    expect(action).toEqual({
        type:"LOGOUT"
    })
})