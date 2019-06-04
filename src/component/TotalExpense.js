import SelectTotalExpense from '../selectors/expenses-total'
import React from 'react'
import numeral from 'numeral'
import {connect} from 'react-redux'
import SelectExpense from '../selectors/expenses'
import {Link} from 'react-router-dom'
import SelectExpenseTotal from '../selectors/expenses-total'
export const TotalExpense =({expnseCount,expenseToal})=>{
    const expenseWord=expnseCount===1?'expense':'expenses'
    const formatedExpenseTotal=numeral(expenseToal/100).format('$0,0.00')
    return(
        <div className='page-header'>
            <div className='content-continer'>
                <h1 className='page-header__title'>Visible {expenseWord}  <span>{expnseCount}</span> of total <span>{formatedExpenseTotal}</span></h1>
                <div className='page-header__action'>
                    <Link className='button' to='/create'>Add new Expense</Link>
                </div>
            </div>
        </div>
    )

}
const mapStateToProps=(state)=>{
    const visibleExpense =SelectExpense(state.expense,state.filters)
    return{
        expnseCount:visibleExpense.length,        expenseToal:SelectExpenseTotal(visibleExpense)

    }
}
export default connect(mapStateToProps)(TotalExpense)