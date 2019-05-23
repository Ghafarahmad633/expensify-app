import React from "react";

import ExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters'
import TotalExpense from './TotalExpense'
class ExpensifyDashboardPage extends React.Component{

    render() {
        return (
            <div>
                <div>
                    <TotalExpense/>
                    <ExpenseListFilters/>
                    <ExpenseList />
                </div>
            </div>
        );
    }
}

export default ExpensifyDashboardPage