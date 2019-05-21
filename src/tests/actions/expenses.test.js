import {addExpenses,removeExpense,editExpense} from '../../actions/expenses'
test('Should remove action',()=>{
    const action=removeExpense({id:"222"})
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id:"222"
    })
})

test('Should setup edit expense',()=>{
    const action=editExpense("222",{
        note:"New Note Value",


    })
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id:"222",
        updates:{
            note:"New Note Value"
        }

    })
})

test('should setup add action',()=>{
    const expenseData={desc:"rent",note:"This is added",createdAt:222,amount:200000}
    const action=addExpenses(expenseData)
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            ...expenseData,
            id:expect.any(String)
        }

    })


})

test('should setup add action with default',()=>{
    const action=addExpenses();
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            id:expect.any(String),
            desc:"",
            note:"",
            createdAt:0,
            amount:0
        }
    })
})