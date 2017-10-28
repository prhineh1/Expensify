import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { setPartitionIndex } from '../actions/filters';

export const ExpenseList = (props) => (
    <div className='content-container'>
        <div className='list-header'>
            <div className='show-for-mobile'>Expenses</div>
            <div className='show-for-desktop'>Expense</div>
            <div className='show-for-desktop'>Budget</div>
            <div className='show-for-desktop'>Amount</div>
        </div>
        <div className='list-body'>
            {
                props.expenses.length === 0 ? (
                    <div className='list-item list-item--message'>
                        <span>No expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense, index) => 
                    <ExpenseListItem key={expense.id} expense={expense} budgets={props.budgets} />
                    )
                )
            }
        </div>
        {
            !!props.partitions && (
                <div className='list-nav'>
                    {
                        props.partitions[props.next] && (
                            <button className='button button--nav' onClick={() => props.setPartitionIndex(props.next)}>Next</button>
                        )
                    }
                    { 
                        props.partitions[props.prev] && (
                            <button className='button button--nav' onClick={() => props.setPartitionIndex(props.prev)}>Previous</button>
                        )
                    }
                </div>
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    const [partitionedExpenses, selectedExpenses] = selectExpenses(state.expenses, state.filters);
    return {
        expenses: selectedExpenses,
        partitions: partitionedExpenses,
        next: state.filters.expensesPartitionIndex + 1,
        prev: state.filters.expensesPartitionIndex - 1,
        budgets: state.budgets
    };
};

export default connect(mapStateToProps, { setPartitionIndex })(ExpenseList);

