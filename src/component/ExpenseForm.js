import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'

const now=moment();
console.log(now.format('MMM,Do, YYYY'))
class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            decs: props.expense?props.expense.desc:"",
            note:props.expense?props.expense.note:"",
            amount:props.expense?(props.expense.amount/100).toString():"",
            createdAt:props.expense?moment(props.expense.createdAt):moment(),
            calendarFocused:false,
            error:undefined,
            buttonText:props.buttonText?props.buttonText:"Submit"
        }
    }
    onChangeDecs=(e)=>{
        const decs=e.target.value
        this.setState(()=>({decs}))
    };
    onNoteChange=(e)=>{

        const note=e.target.value
        this.setState(()=>({note}))

    };
    onAmountChange=(e)=>{

        const amount=e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))

        }
    };
    onDateChange=(createdAt)=>{

       if(createdAt){
           this.setState(()=>({createdAt}))
       }

    };
    onFocusChange=({focused})=>{
        this.setState(()=>({calendarFocused: focused}))
    };
    onSubmit=(e)=>{
        e.preventDefault()
        if(!this.state.decs||!this.state.amount){
            this.setState(()=>({error: "Please Fill All Fields"}))
            console.log("Some Error")
        }
        else {
            this.setState(()=>({error: ''}))
            this.props.onSubmit(({
                desc:this.state.decs,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note

            }))
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        name='desc'
                        type='text'
                        placeholder='Decritpion'
                        onChange={this.onChangeDecs}
                        value={this.state.decs}
                    />
                    <input
                        type='text'
                        name='amount'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day)=>false}
                    />
                    <textarea
                        name='note'
                        onChange={this.onNoteChange}
                        value={this.state.note}
                        placeholder='add your note'
                    >

                    </textarea>
                    <button type='submit'>{this.state.buttonText}</button>
                </form>
                {this.state.error!==undefined&&<p>Please Fill out the required fields</p>}
            </div>
        )
    }

}
export default ExpenseForm