import React from 'react'
import {connect} from 'react-redux'
import {setFiltertext} from "../actions/filters";
import {sortyByDate,sortyByAmount} from '../actions/filters'
import {setStartDate,setEndDate} from '../actions/filters'
import {removeExpenseSelctedRange} from '../actions/expenses'
import {refereshStateAfterDelete,setTrueSelectAll,setFalseSelectAll} from '../actions/deleteSelected'
import {DateRangePicker} from 'react-dates'
export class ExpenseListFilters extends React.Component {
    constructor(props){
        super(props)
    }
    state={
        calendarFocused:null,

    }
    onDatesChange=({startDate,endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)

    };
    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}))
    };
    deletedAllSelected=()=>{
        this.props.removeExpenseSelctedRange({ids:this.props.selectedToDeleted})
        this.props.refereshStateAfterDelete()

    }
    selectAll=(e)=>{

        if(e.target.checked){
            this.props.dispatch(setTrueSelectAll())
        }
        if(!e.target.checked){
            this.props.dispatch(setFalseSelectAll())
        }
        console.log(this.props.selectAllExpense)
    }

    onTextChange=(e)=>{
        this.props.setFiltertext(e.target.value)
    }
    onSortChange=(e)=>{
        const filter_select=e.target.value
        if(filter_select==='date'){
            this.props.sortyByDate()
        }
        else if(filter_select==='amount'){
            this.props.sortyByAmount()
        }
    }


    render(){
        return(
            <div>

                <input type='text'
                       disabled={this.props.expenses.length<=0}
                       placeholder='Enter Value To Search'
                       value={this.props.filters.text} onChange={this.onTextChange}/>
                <input type='button' value='Delected Selected'
                       disabled={this.props.selectedToDeleted.length<=0}
                       onClick={this.deletedAllSelected}
                />
                <select
                    disabled={this.props.expenses.length<=0}
                    value={this.props.filters.sortyBy}
                    onChange={this.onSortChange}>
                    <option  value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                    disabled={this.props.expenses.length<=0}
                />
                Select All <input
                type='checkbox'
                onClick={this.selectAll}
                value='selectAll'/>


            </div>
        )
    }

}

const mapStateProps=(state)=>{
    return{
        filters:state.filters,
        expenses:state.expense,
        selectedToDeleted: state.selectedToDeleted,
        selectAllExpense:state.selectAllExpense
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        sortyByDate:()=>dispatch(sortyByDate()),
        sortyByAmount:()=>dispatch(sortyByAmount()),
        setFiltertext:(text)=>dispatch(setFiltertext(text)),
        setStartDate:(date)=>dispatch(setStartDate(date)),
        setEndDate:(date)=>dispatch(setEndDate(date)),
        removeExpenseSelctedRange:(data)=>dispatch(removeExpenseSelctedRange(data)),
        refereshStateAfterDelete:()=>refereshStateAfterDelete()

    }

}
export default connect(mapStateProps,mapDispatchToProps)(ExpenseListFilters)