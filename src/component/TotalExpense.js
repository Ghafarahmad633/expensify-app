import SelectTotalExpense from '../selectors/expenses-total'
import React from 'react'
import numeral from 'numeral'
import {connect} from 'react-redux'
import SelectExpense from '../selectors/expenses'
import SelectExpenseTotal from '../selectors/expenses-total'
export const TotalExpense =({expnseCount,expenseToal})=>{
    const expenseWord=expnseCount===1?'expense':'expenses'
    const formatedExpenseTotal=numeral(expenseToal/100).format('$0,0.00')
    return(
        <div>
            <h1>Visible {expenseWord}  {expnseCount} of total {formatedExpenseTotal}</h1>
        </div>
    )

}
const mapStateToProps=(state)=>{
    const visibleExpense =SelectExpense(state.expense,state.filters)
    return{
        expnseCount:visibleExpense.length,
        expenseToal:SelectExpenseTotal(visibleExpense)
    }
}
export default connect(mapStateToProps)(TotalExpense)