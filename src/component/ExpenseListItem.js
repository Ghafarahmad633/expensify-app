import React from 'react'
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'
import {Link} from "react-router-dom";
 export const ExpenseListItem=({dispatch,desc,id,note,createdAt,amount,onSelectChange,selectAll})=>{
    console.log("This is from "+selectAll)
    return(
        <div>
            <Link  to={`/edit/${id}`}>
                <h3>{desc}</h3>
            </Link>
            <p>Created At {createdAt} - ${amount}</p>
            <strong>{note}</strong>
            <input
                type='checkbox'
                value={id}
                onClick={onSelectChange}
                checked={selectAll}

            />

        </div>
    )
};

export default connect()(ExpenseListItem)