import React from 'react'
import {connect} from 'react-redux'
import {setFiltertext} from "../actions/filters";
import {sortyByDate,sortyByAmount} from '../actions/filters'
import {setStartDate,setEndDate} from '../actions/filters'
import {removeExpenseSelctedRange,startRemoveExpenseSelctedRange} from '../actions/expenses'
import {refereshStateAfterDelete} from '../actions/deleteSelected'
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
        this.props.startRemoveExpenseSelctedRange({ids:this.props.selectedToDeleted})
        this.props.refereshStateAfterDelete()


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
            <div className='content-continer'>
                <div className='input-group'>
                    <div className='input-group__item'>
                        <input type='text'
                               placeholder='search expenses'
                               className='text-input'
                               disabled={this.props.expenses.length<=0}
                               value={this.props.filters.text} onChange={this.onTextChange}
                        />
                    </div>
                    <div className='input-group__item'>
                        <input type='button' value='Delected Selected' className='button button__form'
                               disabled={this.props.selectedToDeleted.length<=0}
                               onClick={this.deletedAllSelected}
                        />
                    </div>
                    <div className='input-group__item'>
                        <select className='select'
                            disabled={this.props.expenses.length<=0}
                            value={this.props.filters.sortyBy}
                            onChange={this.onSortChange}>
                            <option  value='date'>Date</option>
                            <option value='amount'>Amount</option>
                        </select>
                    </div>
                    <div className='input-group__item'>
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
                    </div>
                </div>







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
        startRemoveExpenseSelctedRange:(data)=>dispatch(startRemoveExpenseSelctedRange(data)),
        refereshStateAfterDelete:()=>dispatch(refereshStateAfterDelete())

    }

}
export default connect(mapStateProps,mapDispatchToProps)(ExpenseListFilters)