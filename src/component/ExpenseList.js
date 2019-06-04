import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from '../component/ExpenseListItem'
import selcectExpense from '../selectors/expenses'
import {addItemToDelete,removeItemToDelete} from '../actions/deleteSelected'
export class ExpenseList extends React.Component{
    constructor(props){
        super(props)
    };
    state={
        selectAll:this.props.selectAllExpense===true?'checked':null
    }
    onSelectChange=(e)=>{
        if(e.target.checked){
            this.props.addItemToDelete({id:e.target.value})

        }
        else if(!e.target.checked){
            this.props.removeItemToDelete({id:e.target.value})
        }



    };
    render(){
        return(
            <div className='content-continer'>
                <div className='list-header'>
                    <div className='show-for-mobile'>Expenses</div>
                    <div className='show-for-desktop'>Expense</div>
                    <div className='show-for-desktop'>Amount</div>
                </div>
               <div className='list-item__body'>
                   {
                       this.props.expenses.length===0?(
                           <div className='list-header__message'>No Expenses Found</div>
                       ):(
                           this.props.expenses.map((expenses)=>(
                               <ExpenseListItem
                                   key={expenses.id}
                                   {...expenses}
                                   onSelectChange={this.onSelectChange}
                                   selectAll={this.state.selectAll}
                               />
                           ))
                       )
                   }
               </div>

            </div>
        )
    }
}

const mapStatProps=(state)=>{
    return{
        expenses:selcectExpense(state.expense,state.filters),
        expenseToDelete:state.selectedToDeleted,
        selectAllExpense:state.selectAllExpense

    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        addItemToDelete:(data)=>dispatch(addItemToDelete(data)),
        removeItemToDelete:(data)=>dispatch(removeItemToDelete(data))
    }
}
export default connect(mapStatProps,mapDispatchToProps)(ExpenseList)