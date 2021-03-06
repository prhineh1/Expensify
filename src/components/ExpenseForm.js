import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    state = {
            description: this.props.expense ? this.props.expense.description : '',
            note: this.props.expense ? this.props.expense.note : '',
            amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
            createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
            budgetId: this.props.expense ? this.props.expense.budgetId : '',
            calendarFocused: false,
            error: ''
        };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^((([1-9])\d*)|0)(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}));            
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused}))
    };
    onBudgetChange = e => {
        const budgetId = e.target.value;
        this.setState(() => ({ budgetId }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.' }));
        } else {
            this.setState(() => ({ error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
                budgetId: this.state.budgetId
            });
        }
    }
    render() {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                {this.state.error && <p className='form__error'>{this.state.error}</p>}
                <input
                    className='text-input'
                    type='text'
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                <input 
                    className='text-input'
                    type='text'
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <label className='label' htmlFor='budgetSelect'>Select Budget Category Below: </label>
                <select
                    id="budgetSelect"
                    className='select'
                    value={this.state.budgetId}
                    onChange={this.onBudgetChange}
                >
                    <option value=''>None</option>
                    {this.props.budgets.map(budget => (
                        <option key={budget.id} value={budget.id}>{budget.description}</option>
                    ))}
                </select>
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    className='text-area'
                    placeholder='Add a note for your expense (optional).'
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >                         
                </textarea>
                <div>
                    <button className='button'>{this.props.expense ? 'Save Changes' : 'Save Expense'}</button>
                </div>
            </form>
        );
    }
}