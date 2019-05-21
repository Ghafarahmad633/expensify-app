import React from "react";

import ExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters'
class ExpensifyDashboardPage extends React.Component{

    render() {
        return (
            <div>
                <div>
                    <ExpenseListFilters/>
                    <ExpenseList />
                </div>
            </div>
        );
    }
}

export default ExpensifyDashboardPage