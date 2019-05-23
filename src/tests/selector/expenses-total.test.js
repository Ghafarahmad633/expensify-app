import ExpenseTotalSelector from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'
test('should setup 0 on no expense',()=>{
    const wraper=ExpenseTotalSelector([]);
    expect(wraper).toBe(0)
})

test('should add up sinlge expense',()=>{
    const wraper=ExpenseTotalSelector([expenses[0]]);
    expect(wraper).toBe(1000)
})

test('should add up multiple expense',()=>{
    const wraper=ExpenseTotalSelector(expenses);
    expect(wraper).toBe(5800)
})