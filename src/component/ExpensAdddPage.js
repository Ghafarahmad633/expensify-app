import React from "react";
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {startAddExpense} from '../actions/expenses'
export class ExpensAdddPage extends React.Component{
    onSubmit=(expenses)=>{
        this.props.startAddExpense(expenses)
        this.props.history.push("/")
    }
    render(){
       return(
           <div>
               <div className='page-header'>
                   <div className='content-continer'>
                       <h1 className='page-header__title'>Add Expense</h1>
                   </div>
               </div>

               <div className='content-continer'>
                   <ExpenseForm onSubmit={this.onSubmit}/>
               </div>
           </div>
       )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        startAddExpense:(expenses)=>dispatch(startAddExpense(expenses))
    }
}
export default connect(undefined,mapDispatchToProps)(ExpensAdddPage)