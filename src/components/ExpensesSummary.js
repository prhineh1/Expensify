import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
        {props.expenseCount === 1 ? (
            <h1>Viewing {props.expenseCount} expense totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</h1>
        ) : (
            <h1>Viewing {props.expenseCount} expenses totalling {numeral(props.expensesTotal / 100).format('$0,0.00')} </h1>
        )}
    </div>
);

const mapStateToProps = (state) => ({
    expenseCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: expensesTotal(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);