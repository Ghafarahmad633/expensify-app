import {startAddExpense,addExpenses,removeExpense,editExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'
const createMockStore=configureMockStore([thunk])
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
    const action=addExpenses(expenses[0])
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:expenses[0]

    })


})

test('should add expense to database and store',(done)=>{
    const store =createMockStore({})
    const expenseData={
        desc:"Mouse",
        amount:5000,
        createdAt:30000,
        note:""
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:"ADD_EXPENSE",
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')


    })
        .then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData)
            done()
        })


})

test('should setup add action with default',(done)=>{
    const store =createMockStore({})
    const expenseData={
        desc:'',
        amount:0,
        createdAt:0,
        note:""
    }
    store.dispatch(startAddExpense({})).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:"ADD_EXPENSE",
            expense:{
                id:expect.any(String),


                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')


    })
        .then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData)
            done()
        })
})