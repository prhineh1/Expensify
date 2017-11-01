import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm';
import RemoveButtonModal from './RemoveButtonModal';

export class EditExpensePage extends React.Component {
    state = {
        isOpen: false
    };
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense, this.props.uid);
        this.props.history.push('/');
    };
    removeExpense = () => {
        this.props.removeExpense({ id: this.props.expense.id, uid: this.props.uid });
        this.props.history.push('/');
    };
    toggleModal = () => this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    render() {
        return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                    <h1 className='page-header__title'>Edit Expense</h1>
                </div>
            </div>
            <div className='content-container'>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                    budgets={this.props.budgets} 
                />
                <button className='button button--secondary button--nav' onClick={this.toggleModal} >
                        Remove Expense
                </button>
            </div>
            <RemoveButtonModal 
                toggleModal={this.toggleModal} 
                removeExpense={this.removeExpense}
                isOpen={this.state.isOpen} />
        </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
    uid: state.auth.uid,
    budgets: state.budgets
});

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense, uid) => dispatch(editExpense(id, expense, uid)),
    removeExpense: (id, uid) => dispatch(removeExpense(id, uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);