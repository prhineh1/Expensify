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
            <h1>Add Expense</h1>
            <ExpenseForm
              onSubmit={this.onSubmit}
             />
        </div>
        );
    }
}

const mapStateToProps = (state) => ({ uid: state.auth.uid });

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense, uid) => dispatch(addExpense(expense, uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensePage);