import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense, this.props.uid);
        this.props.history.push('/');
    };
    removeExpense = () => {
        this.props.removeExpense({ id: this.props.expense.id, uid: this.props.uid });
        this.props.history.push('/');
    };
    render() {
        return (
        <div>
            <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit} />
            <button onClick={this.removeExpense} >
                    Remove
            </button>
        </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
    uid: state.auth.uid
});

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense, uid) => dispatch(editExpense(id, expense, uid)),
    removeExpense: (id, uid) => dispatch(removeExpense(id, uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);