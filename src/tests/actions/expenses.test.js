import {
    startAddExpense,
    addExpenses,
    removeExpense,
    startRemoveExpense,
    editExpense,
    setExpense,
    startSetExpense,
    startRemoveExpenseSelctedRange,
    startEditExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'
const createMockStore=configureMockStore([thunk])
const uid='test123'
const defaultAuthState={auth:{uid}}
beforeEach((done)=>{
    const expnesesData={}
    expenses.forEach(({id,desc,note,amount,createdAt})=>{
        expnesesData[id]={desc,note,amount,createdAt}
    })
    database.ref(`users/${uid}/expenses`).set(expnesesData).then(()=>{
        done()
    })
})
test('Should remove action',()=>{
    const action=removeExpense({id:"222"})
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id:"222"
    })
})

test('should setup startRemoveExpense  ',(done)=>{
    const store =createMockStore(defaultAuthState)
    const id=expenses[0].id;
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:"REMOVE_EXPENSE",
            id
        })
        return database.ref(`users/${uid}/expenses${id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy()
        done()
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

test('should set up startEditExpense',()=>{
    const store =createMockStore(defaultAuthState)
    const updates={
        amount:664556,
        createdAt:8876545789766
    }
    const id=expenses[0].id
    store.dispatch(startEditExpense(id,updates)).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:"EDIT_EXPENSE",
            updates,
            id
        })
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
    const store = createMockStore(defaultAuthState)
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData)
            done()
        })


})

test('should setup add action with default',(done)=>{
    const store =createMockStore(defaultAuthState)
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')


    })
        .then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData)
            done()
        })
})


test('Test Should set up SetExpense action with data',()=>{
    const action=setExpense(expenses)
    expect(action).toEqual({
        type:"SET_EXPENSES",
        expenses,
    })
})

test('should setup the fetching data from firebase',(done)=>{
    const store=createMockStore(defaultAuthState)
    store.dispatch(startSetExpense()).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:"SET_EXPENSES",
            expenses
        })
        done()

    })
})

test('should setup startRemoveExpenseSelctedRange',(done)=>{
    const store=createMockStore(defaultAuthState)
    const ids=[]
    expenses.forEach((exp)=>{
        ids.push(exp.id)
    })
    store.dispatch(startRemoveExpenseSelctedRange({ids})).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:"REMOVE_EXPENSES_SELECTED_RANGE",
            ids
        })
        done()
    })
})