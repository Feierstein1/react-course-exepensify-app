import React from 'react';
import {connect} from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

const ExpenseSummary = ({expenseCount, expenseTotal}) => {
    const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00')
    const wording = expenseCount === 1 ? 'expense': 'expenses'
    return (
        <div>
        <p>Viewing {expenseCount} {wording} totaling {formattedExpenseTotal}</p>
        </div>
    );
};

const mapStateToProps =(state)=>{
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return{
        expesneCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses),
    }
}

export default connect(mapStateToProps)(ExpenseSummary);
