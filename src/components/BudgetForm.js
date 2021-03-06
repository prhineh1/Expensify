import React from 'react';

export default class BudgetForm extends React.Component {
  state = {
    description: this.props.budget ? this.props.budget.description : '',
    amount: this.props.budget ? (this.props.budget.amount / 100).toString() : '',
    error: ''
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^((([1-9])\d*)|0)(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }
  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please enter a description and amount.' }));
    }
    else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100
      });
    }
  }
  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          {this.state.error && <p className='form__error'>{this.state.error}</p>}
          <input
            className="text-input"
            type='text'
            placeholder='Budget Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
           />
          <input
            className="text-input"
            type="text"
            placeholder='Budgeted Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
           />
           <div>
                <button className='button'>{this.props.budget ? 'Save Changes' : 'Save Budget'}</button>
            </div>
        </form>
      </div>
    )
  }
}