import selectExpense from '../../selectors/expenses'
import moment from 'moment';
import expenses from '../fixtures/expenses'
test('should setup filter by text value',()=>{
    const filterText={
        text:"u",
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpense(expenses,filterText);
    expect(result).toEqual([expenses[1]])
})


test('should setup filter by Start Date',()=>{
    const filterText={
        text:"",
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result=selectExpense(expenses,filterText);
    expect(result).toEqual([expenses[2],expenses[0]])
})

test('should setup filter by End Date',()=>{
    const filterText={
        text:"",
        sortBy:'date',
        startDate:moment(0).add(2,'days'),
        endDate:moment(0).add(4,'days')
    }
    const result=selectExpense(expenses,filterText);
    expect(result).toEqual([expenses[2]])
})

test('should setup filter by Amount',()=>{
    const filterText={
        text:"",
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpense(expenses,filterText);
    expect(result).toEqual([expenses[2],expenses[1],expenses[0]])
})

test('should setup filter by Data',()=>{
    const filterText={
        text:"",
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpense(expenses,filterText);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})