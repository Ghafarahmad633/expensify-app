import expenseReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
test("Should setup default expense",()=>{
    const state=expenseReducer(undefined,{type:"@@INT"})
    expect(state).toEqual([])

})

test("Should setup REMOVE EXPENSE",()=>{
    const state=expenseReducer(expenses,{type:"REMOVE_EXPENSE",id:expenses[0].id})
    expect(state).toEqual([expenses[1],expenses[2]])
})

test("Should setup REMOVE EXPENSE should not remove expense if id not found",()=>{
    const state=expenseReducer(expenses,{type:"REMOVE_EXPENSE",id:-2222})
    expect(state).toEqual(expenses)
})
test("Should setup Add Expense",()=>{
    const expense={
        id:"22222",
        note:"This is bill",
        desc:"Bill Amount",
        amount:200000,
        createdAt:20000000
    }
    const action={
        type:"ADD_EXPENSE",
        expense
    }
    const state=expenseReducer(expenses,action)
    expect(state).toEqual([...expenses,expense])
})
test("Should setup Edit Expense",()=>{
    const updates={
        amount:23232323,
        note:"This is my room rent"
    }
    const action={
        type:"EDIT_EXPENSE",
        updates,
        id:expenses[0].id
    }
    const state=expenseReducer(expenses,action)
    expect(state[0].amount).toBe(updates.amount)
})

test("Should setup Edit Expense if id does not exist",()=>{
    const updates={
        amount:23232323,
        note:"This is my room rent"
    }
    const action={
        type:"EDIT_EXPENSE",
        updates,
        id:-3234324
    }
    const state=expenseReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test("Should setup REMOVE_EXPENSES_SELECTED_RANGE",()=>{
    const updates={
        amount:23232323,
        note:"This is my room rent"
    }
    const action={
        type:"REMOVE_EXPENSES_SELECTED_RANGE",
        ids:["1","3"]
    }
    const state=expenseReducer(expenses,action)
    expect(state).toEqual([expenses[1]])
})



test('should set up SET UP EXPENSE action',()=>{
    const action={
        type:"SET_EXPENSES",
        expenses:[expenses[0]]
    }
    const state=expenseReducer(expenses,action)
    expect(state).toEqual([expenses[0]])

})