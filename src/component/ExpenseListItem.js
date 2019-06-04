import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import moment from 'moment'
import numeral from 'numeral'
 export const ExpenseListItem=({dispatch,desc,id,note,createdAt,amount,onSelectChange,selectAll})=>{
    console.log("This is from "+selectAll)
    return(
        <div className='list-item'>
            <input className='list-item__checkbox'
                type='checkbox'
                value={id}
                onClick={onSelectChange}
                checked={selectAll}

            />
            <Link className='list-item__link'  to={`/edit/${id}`}>
                <div>
                    <h3 className='list-item__title'>{desc}</h3>
                    <span className='list-item__subtitle'>{moment(createdAt).format("MMMM Do , YYYY")}</span>
                </div>
                <h3 className='list-item__data'> {numeral(amount/100).format('$0,0.00')}</h3>
            </Link>



        </div>
    )
};

export default connect()(ExpenseListItem)