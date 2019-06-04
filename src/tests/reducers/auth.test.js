import authReducer from '../../reducers/auth'
test("Should setup default expense",()=>{
    const state=authReducer(undefined,{type:"@@INT"})
    expect(state).toEqual({})

})

test("Should setup LOGIN reducer",()=>{
    const action={
        type:"LOGIN",
        uid:"434324324324324",

    }
    const state=authReducer({},action)
    expect(state.uid).toBe(action.uid)
})

test("Should setup LOGOUT reducer",()=>{
    const action={
        type:"LOGOUT",

    }
    const state=authReducer({uid:"646hhh"},action)
    expect(state).toEqual({})
})