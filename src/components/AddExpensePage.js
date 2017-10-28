import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense, this.props.uid)
        this.props.history.push('/');
    };
    render() {
        return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                    <h1 className='page-header__title'>Add Expense</h1>
                </div>
            </div>
            <div className='content-container'>
                <ExpenseForm
                onSubmit={this.onSubmit}
                budgets={this.props.budgets}
                />
             </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => ({ 
    uid: state.auth.uid,
    budgets: state.budgets
});

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense, uid) => dispatch(addExpense(expense, uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensePage);