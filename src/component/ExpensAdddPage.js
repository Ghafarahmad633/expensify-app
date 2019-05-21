import React from "react";
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {addExpenses} from '../actions/expenses'
export class ExpensAdddPage extends React.Component{
    onSubmit=(expenses)=>{
        this.props.addExpenses(expenses)
        this.props.history.push("/")
    }
    render(){
       return(
           <div>
               <h1>Add Expense</h1>
               <ExpenseForm onSubmit={this.onSubmit}/>
           </div>
       )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addExpenses:(expenses)=>dispatch(addExpenses(expenses))
    }
}
export default connect(undefined,mapDispatchToProps)(ExpensAdddPage)